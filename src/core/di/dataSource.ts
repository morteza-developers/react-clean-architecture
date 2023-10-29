import BlogApiProvider from "features/blog/data/dataSource/remote/blogApiProvider";
import UserApiProvider from "features/user/data/dataSource/remote/apiProvider";
import { blogHttp, userHttp } from "./http";
import UserStorageProvider from "features/user/data/dataSource/local/storageProvider";
const baseUrl = process.env.BASE_API_URL || "";
const blogApiProvider: BlogApiProvider = new BlogApiProvider(blogHttp, baseUrl);
const userStorageProvider = new UserStorageProvider();
const userApiProvider: UserApiProvider = new UserApiProvider(userHttp, baseUrl);

export { blogApiProvider, userApiProvider, userStorageProvider };
