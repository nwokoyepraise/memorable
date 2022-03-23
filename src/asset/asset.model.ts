//Model class for GraphQL media assets using code-first approach

import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

//Decorator to mark class GraphQL type
@ObjectType({})
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
  @Column({nullable: false})
  @CreateDateColumn()
  time_added: Date;

  @Field({ nullable: true })
  @Column({ nullable: true })
  score_type1: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  score_type2: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  score_type3: number;
}
