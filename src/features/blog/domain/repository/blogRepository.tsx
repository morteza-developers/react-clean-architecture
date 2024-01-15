import { DataState } from "core/resources/dataState";
import { BlogEntity } from "../entities/blogs";
import { GetAllBlogsParams } from "core/params/blog/blog";

export abstract class BaseBlogsRepository {
  abstract getAllBlog(
    params: GetAllBlogsParams
  ): Promise<DataState<BlogEntity[]>>;
}
