import BlogRepository from "features/blog/data/repository/blogRepository";
import {
  blogApiProvider,
  userApiProvider,
  userStorageProvider,
} from "./dataSource";
import makeDefaultPipeLine from "core/factories/https/pipeLineFactory";
import UserRepository from "features/user/data/repository/userRepository";

const blogRepository = new BlogRepository(
  blogApiProvider,
  makeDefaultPipeLine()
);

const userRepository = new UserRepository(
  userApiProvider,
  userStorageProvider,
  makeDefaultPipeLine()
);

export { blogRepository, userRepository };
