import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { BullModule } from '@nestjs/bull'
import { TypeOrmConfig, GraphQLConfig, BullConfig } from './configs/config.service'


@Module({
  imports: [
    TypeOrmModule.forRoot( TypeOrmConfig.options() ),
    GraphQLModule.forRoot( GraphQLConfig.options() ),
    BullModule.registerQueue( BullConfig.options() ),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}