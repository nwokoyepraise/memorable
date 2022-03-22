import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class AddScoresDto {
    @Field()
    score_type1: number

    @Field()
    score_type2: number

    @Field()
    score_type3: number
}