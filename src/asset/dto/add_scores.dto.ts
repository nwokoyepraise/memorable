import { Field, InputType } from '@nestjs/graphql';
import { Min, Max } from 'class-validator';

@InputType()
export class AddScoresDto {
  @Field()
  @Min(0)
  @Max(100)
  score_type1: number;

  @Field()
  @Min(0)
  @Max(100)
  score_type2: number;

  @Field()
  @Min(0)
  @Max(100)
  score_type3: number;
}
