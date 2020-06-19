// src/config/config.service.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { BullModuleOptions } from '@nestjs/bull'

// Set .env file when not find it in a environment variables
if ( !process.env.DB_HOST ) {
  require('dotenv').config({ path: '../.env' })
}



// Type Orm Options
class TypeOrmConfig {
 
  // TYPEORM OPTIONS
  static options(): TypeOrmModuleOptions {

    return {
      type: 'postgres',

      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,

      entities: [  
        __dirname + '/../**/*.entity{.ts,.js}'
      ],
    
      // If true, migrations auto run on every application launch
      migrationsRun: process.env.RUN_MIGRATIONS == "true",
    
      migrationsTableName: 'migration',
    
      migrations: [
        __dirname + '/../migrations/**/*.{ts,js}'
      ],
    
      cli: {
        entitiesDir: "src/modules",
        migrationsDir: "src/migrations"
      },
    
      cache: {
        type: "redis",
        options: {
          host: process.env.REDIS_HOST,          // use service on docker
          port: parseInt(process.env.REDIS_PORT),
          db: process.env.REDIS_CACHE_DB
        },
        duration: parseInt(process.env.REDIS_CACHE_DURATION) // milliseconds, if not specified in the query ou repo
      },
    
      // If MODE env variable != DEV
      ssl: process.env.MODE !== "DEV",
    }
  }
}


// GRAPHQL Options
class GraphQLConfig {

  // GRAPHQL
  static options() {
    return {
      autoSchemaFile: 'schema.gql',
      playground: process.env.GRAPHQL_PLAYGROUND == 'true',
      path: process.env.GRAPHQL_PATH
    }
  }
}



// Bull Options
class BullConfig {

  // QUEUE
  static options(): BullModuleOptions {

    return {
      name: 'audio',
      redis: {
        host: process.env.REDIS_HOST,          // use service on docker
        port: parseInt(process.env.REDIS_PORT),
        db: parseInt(process.env.REDIS_QUEUE_DB)
      }
    }
  }


}

// Exports
export { TypeOrmConfig, GraphQLConfig, BullConfig }