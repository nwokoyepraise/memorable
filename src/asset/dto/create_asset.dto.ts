import { Field, InputType } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class CreateAssetDto {
  // @Field()
  // id: string;

  @Field()
  asset_type: string;

  @Field()
  filename: string;

  @Field()
  extension: string;

  @Field({ defaultValue: new Date() })
  date_added: Date;
}
