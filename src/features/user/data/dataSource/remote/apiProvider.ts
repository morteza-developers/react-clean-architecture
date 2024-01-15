// در  این قسمت فقط باید
// ای پی آی
//  صدا زده شود و رو یدیتا نباید کاری انجام شود

import { BaseResponse } from "core/resources/baseResponse";
import { IHttpClient } from "infrastructure/http";

class UserApiProvider {
  constructor(private httpClient: IHttpClient, private baseUrl: string) {}

  login = async (data: object) => {
    return await this.httpClient.post<BaseResponse<any>>(
      `${this.baseUrl}auth/login`,
      {
        data: data,
        headers: { "Version-App": "1" },
      }
    );
  };
}

export default UserApiProvider;
