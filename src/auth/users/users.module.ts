import { UsersService } from './services/users.service';
import { Module } from '@nestjs/common';
import { userProviders } from './users.providers';
import { DatabaseModule } from 'src/database/database.module';
import { UsersResolver } from './resolvers/users.resolver';

@Module({
    imports: [DatabaseModule],
    providers: [UsersResolver, UsersService, ...userProviders],
})
export class UsersModule { }
