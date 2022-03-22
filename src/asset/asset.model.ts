import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('assets')
export class AssetModel {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 15, nullable: false })
  asset_type: string;

  @Field()
  @Column({ length: 200, nullable: false })
  filename: string;

  @Field()
  @Column({ length: 10, nullable: false })
  extension: string;

  @Field()
  @Column()
  @CreateDateColumn()
  time_added: Date;

  @Field()
  @Column({ nullable: false })
  score_type1: number;

  @Field()
  @Column({ nullable: false })
  score_type2: number;

  @Field()
  @Column({ nullable: false })
  score_type3: number;
}
