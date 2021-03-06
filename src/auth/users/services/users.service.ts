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

  async update(input: FilterQuery<User>) {
    const { email, name, age, _id } = input || {};
    const entity = await this.userModel.findOne({ _id: _id });
    if (!entity) return {};
    entity.email = email;
    entity.name = name;
    entity.age = age;
    entity.save();
    return entity;
  }

  async findOne(_id: string): Promise<User> {
    const searchQuery = { _id };
    return this.userModel.findOne(searchQuery).lean();
  }

  async find(): Promise<User[]> {
    return this.userModel.find().lean();
  }
}
