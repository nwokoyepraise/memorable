import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetModel } from './asset.model';
import { CreateAssetDto } from './dto/create_asset.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(AssetModel)
    private assetRepository: Repository<AssetModel>,
  ) {}

  findOne(id: string): Promise<AssetModel> {
    return this.assetRepository.findOne(id);
  }

  async createOne(asset: CreateAssetDto): Promise<AssetModel> {
      return this.assetRepository.save({
        id: uuidv4(),
        asset_type: asset.asset_type,
        filename: asset.filename,
        extension: asset.extension,
        date_added: asset.date_added,
        score_type1: asset.score_type1,
        score_type2: asset.score_type2,
        score_type3: asset.score_type3
      });
  }
}
