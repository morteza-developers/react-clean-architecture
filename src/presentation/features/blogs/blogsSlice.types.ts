import { BlogEntity } from "features/blog/domain/entities/blogs";
import { GetAllBlogsParams } from "features/blog/domain/params/blog";
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
