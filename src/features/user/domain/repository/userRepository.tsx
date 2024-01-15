import { DataState } from "core/resources/dataState";
import { UserLoginEntity } from "../entities";
import { UserLoginParams } from "core/params/user/user";

export abstract class BaseUserRepository {
  abstract login(
    params: UserLoginParams
  ): Promise<DataState<UserLoginEntity>>;

  abstract logOut(): void;
}
