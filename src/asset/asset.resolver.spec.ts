import { Test, TestingModule } from '@nestjs/testing';
import { GraphQLInputType } from 'graphql';
import { ObjectType } from 'typeorm';
import { AssetModel } from './asset.model';
import { AssetResolver } from './asset.resolver';
import { AssetService } from './asset.service';
import { AddScoresDto } from './dto/add_scores.dto';
import { AverageScoreDto } from './dto/average_score.dto';
import { CreateAssetDto } from './dto/create_asset.dto';

type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

// const repositoryMockFactory: () => MockType<AssetModel> = jest.fn(() => ({
//   findOne: jest.fn((entity) => entity),
//   // ...
// }));

describe('-- Unit Test For AssetResolver --', () => {
  let resolver: AssetResolver;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AssetResolver,
        {
          provide: AssetService,
          useFactory: () => ({
            createOne: jest.fn((asset: CreateAssetDto) => ({
              id: '12345',
              ...asset,
            })),
            findOne: jest.fn((id: '12345') => ({
              id: id,
              asset_type: 'image',
              extension: 'png',
              date_added: '2022-03-22 18:31:47.0009+01',
            })),
            addScores: jest.fn((id: number, scores: AddScoresDto) => ({
              id: id,
              ...scores,
            })),
            getAverageScore: jest.fn(
              (asset_type: string, score_type: string) => ({
                average_score: 3.45
              }),
            ),
          }),
        },
      ],
    }).compile();

    resolver = module.get<AssetResolver>(AssetResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should find an asset', async () => {
    const asset = await resolver.asset('12345');
    expect(asset).toEqual({
      id: '12345',
      asset_type: 'image',
      extension: 'png',
      date_added: '2022-03-22 18:31:47.0009+01',
    });
  });

  it('it should create an asset', async () => {
    const asset = await resolver.createAsset({
      asset_type: 'image',
      filename: 'abcd',
      extension: 'png',
      time_added: new Date('2022-03-22 18:31:47.0009+01'),
    });

    expect(asset).toEqual({
      id: '12345',
      asset_type: 'image',
      filename: 'abcd',
      extension: 'png',
      time_added: new Date('2022-03-22 18:31:47.0009+01'),
    });
  });

  it('should add scores to an asset', async () => {
    const asset = await resolver.addScores(
      {
        score_type1: 12,
        score_type2: 45,
        score_type3: 59,
      },
      '12345',
    );
    expect(asset).toEqual({
      id: '12345',
      score_type1: 12,
      score_type2: 45,
      score_type3: 59,
    });
  });

  it('should get average score', async () => {
    const average: AverageScoreDto = await resolver.getAverage(
      'image',
      'Type2',
    );
    expect(average).toEqual({
        average_score: 3.45
    })
  });
});
