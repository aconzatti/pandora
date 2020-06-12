import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { GraphQLModule } from '@nestjs/graphql'
import { Config } from './configs/config.service'
import { BullModule } from '@nestjs/bull'


@Module({
  imports: [
    TypeOrmModule.forRoot( Config.typeOrmOptions() ),
    GraphQLModule.forRoot( Config.graphqlOptions() ),
    BullModule.registerQueue( Config.bullOptions() ),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
})
export class AppModule {}