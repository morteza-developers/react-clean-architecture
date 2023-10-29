import {
  initFilter,
  resetBlogs,
  blogsUpdateFilter,
  blogsUpdatePage,
  recycleBlogsUpdatePage,
  initRecycleBlogsFilter,
} from "./blogsSlice";

import { createAppAsyncThunk } from "presentation/redux/utils";
import { GetAllBlogsParams } from "features/blog/domain/params/blog";
import { getAllBlogsUseCase } from "core/di/useCases";

export const fetchBlogs = createAppAsyncThunk(
  "blogs/fetchBlogs",
  async (inComingFilter: GetAllBlogsParams, { getState, dispatch }) => {
    const {
      blogs: {
        list: { filter },
      },
    } = getState();
    const copyFilter = {
      ...filter,
      ...inComingFilter,
      page: 1,
    };
    dispatch(blogsUpdateFilter(copyFilter));
    const response = await getAllBlogsUseCase(copyFilter);
    return response.data;
  }
);

export const fetchInitBlogs = createAppAsyncThunk(
  "blogs/fetchInitBlogs",
  async (inComingFilter: GetAllBlogsParams, { getState, dispatch }) => {
    const {
      blogs: {
        list: { filter },
      },
    } = getState();
    const copyFilter = { ...filter, ...inComingFilter };
    dispatch(initFilter(copyFilter));
    const response = await getAllBlogsUseCase(copyFilter);
    return response.data;
  }
);
export const fetchRetryBlogs = createAppAsyncThunk(
  "blogs/fetchRetryBlogs",
  async (_, { getState }) => {
    const {
      blogs: {
        list: { filter },
      },
    } = getState();

    const response = await getAllBlogsUseCase(filter);
    return response.data;
  }
);

export const fetchBlogsByReset = createAppAsyncThunk(
  "blogs/fetchBlogsByReset",
  async (_, { dispatch }) => {
    dispatch(resetBlogs());
    const response = await getAllBlogsUseCase(
      new GetAllBlogsParams({ page: 1 })
    );
    return response.data;
  }
);

export const fetchBlogsByPage = createAppAsyncThunk(
  "blogs/fetchBlogsByPage",
  async (page: number, { getState, dispatch }) => {
    const {
      blogs: {
        list: { filter },
      },
    } = getState();
    const copyFilter = new GetAllBlogsParams({ ...filter, page });
    dispatch(blogsUpdatePage(page));
    const response = await getAllBlogsUseCase(copyFilter);
    return response.data;
  }
);

export const reTryFetchBlogs = createAppAsyncThunk(
  "blogs/reTryFetchBlogs",
  async (_, { getState }) => {
    const {
      blogs: {
        list: { filter },
      },
    } = getState();

    const response = await getAllBlogsUseCase(filter);
    return response.data;
  }
);

export const deleteBlogsById = createAppAsyncThunk(
  "blogs/deleteBlogsById",
  async (id: number) => {
    // const response = await makeBlog().deleteBlog({ postId: id });
    // return response.data;
  }
);

export const usedBlogsById = createAppAsyncThunk(
  "blogs/usedBlogsById",
  async (id: number, { dispatch }) => {
    // const response = await makeBlog().deleteBlog({ postId: id });
    // dispatch(fetchRetryBlogs());
    // return response.data;
  }
);

//RecycleBlogs
export const fetchRecycleBlogsByPage = createAppAsyncThunk(
  "blogs/fetchRecycleBlogsByPage",
  async (page: number = 1, { getState, dispatch }) => {
    const {
      blogs: {
        recycle: { filter },
      },
    } = getState();
    // const copyFilter = { ...filter, page };
    // dispatch(recycleBlogsUpdatePage(page));
    // const response = await makeBlog().recycleBlogs(copyFilter);
    // return response.data.data;
  }
);

export const reTryFetchRecycleBlogs = createAppAsyncThunk(
  "blogs/reTryFetchRecycleBlogs",
  async (_, { getState }) => {
    const {
      blogs: {
        recycle: { filter },
      },
    } = getState();

    // const response = await makeBlog().recycleBlogs(filter);
    // return response.data.data;
  }
);
export const fetchInitRecycleBlogs = createAppAsyncThunk(
  "blogs/fetchRecycleInitBlogs",
  async (inComingFilter: GetAllBlogsParams, { getState, dispatch }) => {
    const {
      blogs: {
        recycle: { filter },
      },
    } = getState();
    // const copyFilter = { ...filter, ...inComingFilter };
    // dispatch(initRecycleBlogsFilter(copyFilter));
    // const response = await makeBlog().recycleBlogs(copyFilter);
    // return response.data.data;
  }
);

export const restoreBlogsById = createAppAsyncThunk(
  "blogs/restoreBlogsById",
  async (id: number) => {
    // const response = await makeBlog().restoreBlog({ postId: id });
    // return response.data;
  }
);
