import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetModel } from './asset.model';
import { CreateAssetDto } from './dto/create_asset.dto';
import { v4 as uuidv4 } from 'uuid';
import { AddScoresDto } from './dto/add_scores.dto';
import { AverageScoreDto } from './dto/average_score.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(AssetModel)
    private assetRepository: Repository<AssetModel>,
  ) {}

  //function to find asset by ID
  findOne(id: string): Promise<AssetModel> {
    return this.assetRepository.findOne(id);
  }

  //function to create asset
  async createOne(asset: CreateAssetDto): Promise<AssetModel> {
    return this.assetRepository.save({
      id: uuidv4(),
      asset_type: asset.asset_type,
      filename: asset.filename,
      extension: asset.extension,
    });
  }

  //function to add score to an asset using it's ID
  async addScores(id: string, scores: AddScoresDto): Promise<AssetModel> {
    await this.assetRepository.update(id, {
      //   ...(user.name && { name: user.name })
      score_type1: scores.score_type1,
      score_type2: scores.score_type2,
      score_type3: scores.score_type3,
    });

    return this.assetRepository.findOneOrFail(id);
  }

  //function to get average score by asset_type and score_type
  async getAverageScore(
    asset_type: string,
    score_type: string,
  ): Promise<AverageScoreDto> {
    let field: string;
    switch (score_type) {
      case 'Type1':
        field = 'score_type1';
        break;

      case 'Type2':
        field = 'score_type2';
        break;

      case 'Type3':
        field = 'score_type3';
        break;
    }
    //Get data from asset repository
    let data = await this.assetRepository
      .createQueryBuilder('assets')
      .select(['id', 'time_added', field])
      .where('assets.asset_type = :asset_type', { asset_type })
      .getRawMany();

    let sum: number = 0;
    data.forEach((element) => {
      sum += element[field];
    });

    //return average score
    return { average_score: sum / data.length };
  }
}
