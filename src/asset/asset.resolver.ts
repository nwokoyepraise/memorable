import { AssetModel } from './asset.model';
import { AssetService } from './asset.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { CreateAssetDto } from './dto/create_asset.dto';
import { AddScoresDto } from './dto/add_scores.dto';
import { AverageScoreDto } from './dto/average_score.dto';
import { ApolloError } from 'apollo-server-express';

@Resolver((of) => AssetModel)
export class AssetResolver {
  constructor(@Inject(AssetService) private assetService: AssetService) {}

  //Resolver query to find an asset by its ID
  @Query((returns) => AssetModel)
  async asset(@Args('id') id: string): Promise<AssetModel> {
    //get asset details from asset service class
    return await this.assetService.findOne(id);
  }

  //Resolver query
  @Query(() => String)
  hello(): string {
    return 'Memorable rocks!';
  }

  //Resolver mutation to create asset. Accepts asset object with asset_type, extension and filename properties
  @Mutation((returns) => AssetModel)
  async createAsset(@Args('asset') asset: CreateAssetDto): Promise<AssetModel> {
    //Field validation check for asset_type
    if (!['video', 'image'].includes(asset.asset_type)) {
      throw new ApolloError(
        'Validation error for field asset_type. Can either be video or image',
        'GRAPHQL_VALIDATION_FAILED',
      );
    }
    //Create asset using asset service class
    return await this.assetService.createOne(asset);
  }

  //Resolver mutation to add scores to asset using its ID
  @Mutation((returns) => AssetModel)
  async addScores(
    @Args('scores') scores: AddScoresDto,
    @Args('id') id: string,
  ): Promise<AssetModel> {
    //Field validation check for asset_scores to make sure that they are within acceptable range
    Object.entries(scores).forEach((element) => {
      if (element[1] < 0 || element[1] > 100) {
        throw new ApolloError(
          `Validation error for field ${element[0]}. Value must be within the range of 0 - 100`,
          'GRAPHQL_VALIDATION_FAILED',
        );
      }
    });
    //Add scores using asset service class
    return await this.assetService.addScores(id, scores);
  }

  //Resolver query to get average score across board by using asset_type and score_type
  @Query((returns) => AverageScoreDto)
  async getAverage(
    @Args('asset_type') asset_type: string,
    @Args('score_type') score_type: string,
  ): Promise<AverageScoreDto> {
    //Field validation check for score_type to make sure it is of valid type
    if (
      score_type != 'Type1' &&
      score_type != 'Type2' &&
      score_type != 'Type3'
    ) {
      throw new ApolloError(
        `Validation error for field score_type. Value must be Type1, Type2 or Type3`,
        'GRAPHQL_VALIDATION_FAILED',
      );
    }

    //Field validation check for asset typee to make it is of valid type
    if (asset_type != 'image' && asset_type != 'video') {
      throw new ApolloError(
        `Validation error for field asset_type. Must be either image or video`,
        'GRAPHQL_VALIDATION_FAILED',
      );
    }
    //Get average score from aseet service class
    return await this.assetService.getAverageScore(asset_type, score_type);
  }
}
