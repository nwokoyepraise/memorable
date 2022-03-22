import { AssetModel } from "./asset.model";
import { AssetService } from "./asset.service";
import { Resolver, Mutation, Args, Query, ResolveField, Parent} from "@nestjs/graphql";
import { Inject } from "@nestjs/common";

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
    sayHello(): string {
        return 'Hello World!';
    }

}
