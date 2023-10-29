export class UserLoginParams {
  user: string;
  password: string;

  constructor(data: UserLoginParams) {
    this.user = data.user;
    this.password = data.password;
  }
}
