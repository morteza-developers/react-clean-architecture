import { DataState, DataSuccess } from "core/resources/dataState";
import { UserModel } from "../models";
import { IPipeLine } from "core/resources/pipeLine";
import { BaseUserRepository } from "features/user/domain/repository/userRepository";
import { UserLoginParams } from "features/user/domain/params";
import UserApiProvider from "../dataSource/remote/apiProvider";
import UserStorageProvider from "../dataSource/local/storageProvider";

class UserRepository extends BaseUserRepository {
  constructor(
    private apiProvider: UserApiProvider,
    private cacheProvider: UserStorageProvider,
    private pipeLine: IPipeLine
  ) {
    super();
  }

  login = async (params: UserLoginParams): Promise<DataState<UserModel>> => {
    this.pipeLine.beforeRequest(params);
    return await this.apiProvider
      .login(params)
      .then((r) => {
        this.pipeLine.requestSuccess(params);
        this.cacheProvider.setToken(r.data.token);
        return new DataSuccess<UserModel>(new UserModel(r.data));
      })
      .catch((e: any) => {
        return this.pipeLine.requestFailed(e);
      });
  };

  logOut = () => {
    this.cacheProvider.deleteToken();
  };
}

export default UserRepository;
