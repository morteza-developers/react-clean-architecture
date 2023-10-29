import { RootState } from "presentation/redux/store";

export const getBlogs = (s: RootState) => s.blogs;
export const getBlogsItems = (s: RootState) => s.blogs.list.data;
export const getBlogsFilter = (s: RootState) => s.blogs.list.filter;
export const getBlogsInitialized = (s: RootState) =>
  s.blogs.list.initialized;
export const getBlogsStatus = (s: RootState) => s.blogs.list.status;
export const getBlogsPage = (s: RootState) =>
  s.blogs.list.filter.page;
  
//recycle blogs
export const getRecycleBlogsItems = (s: RootState) =>
  s.blogs.recycle.data;
export const getRecycleBlogsFilter = (s: RootState) =>
  s.blogs.recycle.filter;
export const getRecycleBlogsInitialized = (s: RootState) =>
  s.blogs.recycle.initialized;
export const getRecycleBlogsStatus = (s: RootState) =>
  s.blogs.recycle.status;
export const getRecycleBlogsPage = (s: RootState) =>
  s.blogs.recycle.filter.page;
