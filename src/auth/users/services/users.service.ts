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
    
      async findOne(query: FilterQuery<User>): Promise<User> {
        return this.userModel.findOne(query).lean();
      }
    
      async find(): Promise<User[]> {
        return this.userModel.find().lean();
      }
}
