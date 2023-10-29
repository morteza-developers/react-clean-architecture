import { TOKEN } from "core/utils/constants/storage";
import { ClientCookie } from "core/utils/tools";

class UserStorageProvider {
  cookie: ClientCookie;
  constructor() {
    this.cookie = new ClientCookie();
  }

  setToken = (value: string): void => {
    this.cookie.set(TOKEN, value, 6);
  };

  deleteToken = (): void => {
    this.cookie.delete(TOKEN);
  };
}

export default UserStorageProvider;
