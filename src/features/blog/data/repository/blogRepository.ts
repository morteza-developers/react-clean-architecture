import { BaseBlogsRepository } from "features/blog/domain/repository/blogRepository";
import BlogApiProvider from "../dataSource/remote/blogApiProvider";
import { DataState, DataSuccess } from "core/resources/dataState";
import { BlogModel } from "../models/blog";
import { GetAllBlogsParams } from "features/blog/domain/params/blog";
import { IPipeLine } from "core/resources/pipeLine";

class BlogRepository extends BaseBlogsRepository {
  constructor(
    private apiProvider: BlogApiProvider,
    private pipeLine: IPipeLine
  ) {
    super();
  }

  getAllBlog = async (
    params: GetAllBlogsParams
  ): Promise<DataState<BlogModel[]>> => {
    this.pipeLine.beforeRequest(params);
    return await this.apiProvider
      .getAllBlog(params)
      .then((r) => {
        this.pipeLine.requestSuccess(params);
        return new DataSuccess<BlogModel[]>(
          r.data
          // r.data.map((i: any) => BlogModel.fromJson(i))
        );
      })
      .catch((e: any) => {
        return this.pipeLine.requestFailed(e);
      });
  };
}

export default BlogRepository;
