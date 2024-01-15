import { UseCase } from "core/resources/useCase";
import { DataState } from "core/resources/dataState";
import { BaseUserRepository } from "../repository/userRepository";
import { UserLoginEntity } from "../entities";
import { UserLoginParams } from "core/params/user/user";

class UserLoginUseCase
  implements UseCase<UserLoginParams, DataState<UserLoginEntity>>
{
  constructor(private repository: BaseUserRepository) {}

  execute = async (params: UserLoginParams) => {
    return await this.repository.login({ ...params, config: "admin" });
  };
}

export default UserLoginUseCase;
