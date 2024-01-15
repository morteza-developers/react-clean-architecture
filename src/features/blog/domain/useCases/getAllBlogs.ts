import { BlogEntity } from "../entities/blogs";
import { UseCase } from "core/resources/useCase";
import { DataState } from "core/resources/dataState";
import { BaseBlogsRepository } from "../repository/blogRepository";
import { LIMIT } from "core/utils/constants/mixins";
import { GetAllBlogsParams } from "core/params/blog/blog";

class GetAllBlogsUseCase
  implements UseCase<GetAllBlogsParams, DataState<BlogEntity[]>>
{
  constructor(private repository: BaseBlogsRepository) {}

  execute = async (params: GetAllBlogsParams) => {
    return await this.repository.getAllBlog({ ...params, limit: LIMIT });
  };
}

export default GetAllBlogsUseCase;
