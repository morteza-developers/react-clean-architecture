import { UserLoginEntity } from "features/user/domain/entities";

export class UserModel extends UserLoginEntity {
  static toEntity(json: any): UserLoginEntity {
    return {
      token: json.token,
    };
  }
}
