import { UseCase } from "core/resources/useCase";
import { BaseUserRepository } from "../repository/userRepository";

class UserLoginOutUseCase implements UseCase<undefined, void> {
  constructor(private repository: BaseUserRepository) {}

  execute = async () => {
    return this.repository.logOut();
  };
}

export default UserLoginOutUseCase;
