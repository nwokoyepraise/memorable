import { AssetModel } from "./asset.model";
import { AssetService } from "./asset.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent} from "@nestjs/graphql";
import { Inject } from "@nestjs/common";
import { CreateAssetDto } from "./dto/create_asset.dto";
import { AddScoresDto } from "./dto/add_scores.dto";

@Resolver(of => AssetModel)
export class AssetResolver {
    constructor(
        @Inject(AssetService) private assetService: AssetService
    ) {}

    @Query(returns => AssetModel)
    async asset(@Args('id') id: string): Promise<AssetModel>{
        return await this.assetService.findOne(id);
    }

    @Query(()=> String)
    hello(): string {
        return 'Memorable rocks!';
    }

    @Mutation(returns => AssetModel)
    async createAsset (
        @Args('asset') asset: CreateAssetDto
    ): Promise<AssetModel> {
        return await this.assetService.createOne(asset);
    }

    @Mutation(returns => AssetModel)
    async addScores (
        @Args('scores') scores:  AddScoresDto
    , @Args('id') id: string): Promise<AssetModel> {
        return await this.assetService.addScores(id, scores);
    }
}
