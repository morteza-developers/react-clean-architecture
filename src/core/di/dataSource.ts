import BlogApiProvider from "features/blog/data/dataSource/remote/blogApiProvider";
import UserApiProvider from "features/user/data/dataSource/remote/apiProvider";
import { axiosHttp } from "./http";
import UserStorageProvider from "features/user/data/dataSource/local/storageProvider";
const baseUrl = process.env.BASE_API_URL || "";
const blogApiProvider: BlogApiProvider = new BlogApiProvider(
  axiosHttp,
  baseUrl
);
const userStorageProvider = new UserStorageProvider();
const userApiProvider: UserApiProvider = new UserApiProvider(
  axiosHttp,
  baseUrl
);

export { blogApiProvider, userApiProvider, userStorageProvider };
