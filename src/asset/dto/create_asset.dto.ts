import { Field, InputType } from '@nestjs/graphql';

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
  // @Field()
  // id: string;

  @Field()
  asset_type: FileType;

  @Field()
  filename: string;

  @Field()
  extension: Extension;

  @Field({defaultValue: new Date()})
  date_added: Date;

  @Field({nullable: true})
  score_type1: number;

  @Field({nullable: true})
  score_type2: number;

  @Field({nullable: true})
  score_type3: number;
}
