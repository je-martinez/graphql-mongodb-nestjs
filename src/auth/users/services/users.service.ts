/*
https://docs.nestjs.com/providers#services
*/
import { Model, FilterQuery } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../users.schema';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(input: FilterQuery<User>): Promise<User> {
    return this.userModel.create(input);
  }

  async findOne(email: string): Promise<User> {
    const searchQuery = { email };
    return this.userModel.findOne(searchQuery).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
