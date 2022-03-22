import { Field, InputType } from '@nestjs/graphql';
import { EnumTypeExtensionNode } from 'graphql';

enum FileType {
  video = 'video',
  image = 'image',
}

enum Extension {
  mp4 = 'mp4',
  png = 'png',
}

@InputType()
export class CreateAssetDto {
  @Field()
  id: string;

  @Field()
  asset_type: FileType;

  @Field()
  filename: string;

  @Field()
  extension: Extension;

  @Field()
  date_added: Date;

  @Field()
  score_type1: number;

  @Field()
  score_type2: number;

  @Field()
  score_type3: number;
}
