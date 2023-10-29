import GetAllBlogsUseCase from "features/blog/domain/useCases/getAllBlogs";
import { blogRepository, userRepository } from "./repository";
import UserLoginUseCase from "features/user/domain/useCases/useLogin";
import UserLoginOutUseCase from "features/user/domain/useCases/useLogOut";

//blog
const getAllBlogsUseCase = new GetAllBlogsUseCase(blogRepository).execute;
//user
const userLoginUseCase = new UserLoginUseCase(userRepository).execute;
const userLoginOutUseCase = new UserLoginOutUseCase(userRepository).execute;
export { getAllBlogsUseCase, userLoginUseCase, userLoginOutUseCase };
