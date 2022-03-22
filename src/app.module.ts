import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssetModule } from './asset/asset.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetResolver } from './asset/asset.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'nwokoyepraise',
      password: 'vyfuf87rt78rr67rsjr768r',
      database: 'memorabledb',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
   AssetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
