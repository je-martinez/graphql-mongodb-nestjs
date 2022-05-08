import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.provider';
import { UsersModule } from './auth/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersService } from './auth/users/services/users.service';
import { UsersResolver } from './auth/users/resolvers/users.resolver';
import { userProviders } from './auth/users/users.providers';

@Module({
  imports: [GraphQLModule.forRoot<ApolloDriverConfig>({
    autoSchemaFile: 'schema.gql',
    driver: ApolloDriver,
  }), UsersModule, DatabaseModule],
  controllers: [AppController],
  providers: [    
    AppService,
    UsersService,
    UsersResolver,
    ...databaseProviders,
    ...userProviders
  ],
})
export class AppModule { }
