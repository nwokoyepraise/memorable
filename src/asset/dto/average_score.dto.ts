import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AverageScoreDto {
    @Field()
    average_score: number
}