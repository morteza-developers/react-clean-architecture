// در  این قسمت فقط باید
// ای پی آی
//  صدا زده شود و رو یدیتا نباید کاری انجام شود

import { BaseResponse } from "core/resources/baseResponse";
import { GetAllBlogsParams } from "features/blog/domain/params/blog";
import { IHttpClient } from "infrastructure/http";

class BlogApiProvider {
  constructor(private httpClient: IHttpClient, private baseUrl: string) {}

  getAllBlog = async (params: GetAllBlogsParams) => {
    return await this.httpClient.get<BaseResponse<any[]>>(
      `${this.baseUrl}blog/list/1`,
      {
        params: params,
      }
    );
  };
}

export default BlogApiProvider;
