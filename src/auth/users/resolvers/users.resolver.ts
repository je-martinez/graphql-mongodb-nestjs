import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { CreateUserInput, UpdateUserInput } from '../users.input';
import { User } from '../users.schema';

@Resolver(() => User)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return this.usersService.create(input);
  }

  @Mutation(() => User)
  async updateUser(@Args('input') input: UpdateUserInput) {
    return this.usersService.update(input);
  }

  @Query(() => [User])
  async users() {
    return this.usersService.find();
  }

  @Query(() => User)
  async user(@Args('id', { type: () => String, nullable: false }) id: string) {
    return await this.usersService.findOne(id);
  }
}
