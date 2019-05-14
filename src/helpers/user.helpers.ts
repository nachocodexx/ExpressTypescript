import { UserModel } from "../models/user";

class UserHelpers {
  create(data: any) {
    const user = new UserModel(data);
    return user.save();
  }

  getAllUsers() {
    return UserModel.find({});
  }
}

export const userHelpers: UserHelpers = new UserHelpers();
