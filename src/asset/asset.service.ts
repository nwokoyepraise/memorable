import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetModel } from './asset.model';
import { CreateAssetDto } from './dto/create_asset.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(AssetModel)
    private assetRepository: Repository<AssetModel>,
  ) {}

  findOne(id: string): Promise<AssetModel> {
    return this.assetRepository.findOne(id);
  }

  async addOne(asset: CreateAssetDto): Promise<AssetModel> {
      return this.assetRepository.save(asset);
  }
}
