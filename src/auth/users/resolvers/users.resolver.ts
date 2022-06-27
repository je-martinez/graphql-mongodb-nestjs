import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StringSchemaDefinition } from 'mongoose';
import { UsersService } from '../services/users.service';
import { CreateUserInput } from '../users.input';
import { User } from '../users.schema';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }

  @Query(() => [User])
  async users() {
    return this.usersService.find();
  }

  @Query(() => User)
  async user(
    @Args('email', { type: () => String, nullable: false }) email: string,
  ) {
    return await this.usersService.findOne(email);
  }
}
