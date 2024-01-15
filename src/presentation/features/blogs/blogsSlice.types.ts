import { GetAllBlogsParams } from "core/params/blog/blog";
import { BlogEntity } from "features/blog/domain/entities/blogs";
import { IStatus } from "presentation/types/public.types";

export interface BlogsState {
  list: {
    filter: GetAllBlogsParams;
    data: BlogEntity[];
    initialized: boolean;
    status: IStatus;
  };
  recycle: {
    filter: GetAllBlogsParams;
    data: BlogEntity[];
    initialized: boolean;
    status: IStatus;
  };
}
