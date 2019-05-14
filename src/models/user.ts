import { Typegoose, prop } from "typegoose";

export class User extends Typegoose {
  @prop({ required: true, unique: true })
  email: string;

  @prop({ required: true })
  firstName: string;
  @prop({ required: true })
  lastName: string;
}

export const UserModel = new User().getModelForClass(User);
