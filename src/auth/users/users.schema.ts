// src/user/user.schema.ts
import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { ObjectId } from 'mongodb';

export const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
  },
  { _id: true },
);

@ObjectType()
export class User extends Document {
  @Field(() => ID)
  _id: string;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  age: number;
}
