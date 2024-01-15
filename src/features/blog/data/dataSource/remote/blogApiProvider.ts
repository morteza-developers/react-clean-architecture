// در  این قسمت فقط باید
// ای پی آی
//  صدا زده شود و رو یدیتا نباید کاری انجام شود

import { BaseResponse } from "core/resources/baseResponse";
import { IHttpClient } from "infrastructure/http";

class BlogApiProvider {
  constructor(private httpClient: IHttpClient, private baseUrl: string) {}

  getAllBlog = async (params: object) => {
    return await this.httpClient.get<BaseResponse<any[]>>(
      `${this.baseUrl}blog/list/1`,
      {
        params: params,
        headers: { "Version-App": "1" },
      }
    );
  };
}

export default BlogApiProvider;
