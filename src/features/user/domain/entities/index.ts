export class UserLoginEntity {
  public token: number;

  constructor(data: UserLoginEntity) {
    this.token = data.token;
  }
}
