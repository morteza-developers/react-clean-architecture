export class UserLoginParams {
  user: string;
  password: string;
  config: string;

  static toJson(d: UserLoginParams): object {
    return {
      user: d.user,
      password: d.password,
      config: d.config,
    };
  }
}
