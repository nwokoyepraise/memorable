import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetController } from './asset.controller';
import { AssetModel } from './asset.model';
import { AssetResolver } from './asset.resolver';
import { AssetService } from './asset.service';

@Module({
    imports: [TypeOrmModule.forFeature([AssetModel])],
    providers:[AssetService, AssetResolver]
})
export class AssetModule {}