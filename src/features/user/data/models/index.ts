import { UserLoginEntity } from "features/user/domain/entities";

export class UserModel extends UserLoginEntity {
  constructor(data: any) {
    super(data);
  }

  static fromJson(json: any): UserModel {
    return new UserModel({
      token: json.token,
    });
  }
}
