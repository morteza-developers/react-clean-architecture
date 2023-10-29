// در  این قسمت فقط باید
// ای پی آی
//  صدا زده شود و رو یدیتا نباید کاری انجام شود

import { BaseResponse } from "core/resources/baseResponse";
import { UserLoginParams } from "features/user/domain/params";
import { IHttpClient } from "infrastructure/http";

class UserApiProvider {
  constructor(private httpClient: IHttpClient, private baseUrl: string) {}

  login = async (data: UserLoginParams) => {
    return await this.httpClient.post<BaseResponse<any>>(
      `${this.baseUrl}auth/login/pdf`,
      {
        data: data,
      }
    );
  };
}

export default UserApiProvider;
