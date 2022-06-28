// src/user/user.input.ts
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  age: number;
}

@InputType()
export class UpdateUserInput extends CreateUserInput {
  @Field()
  _id: string;
}
