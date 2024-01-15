import { makeAxiosHttpClient } from "core/factories/https/axiosHttpClientFactory";
import { TOKEN } from "core/utils/constants/storage";
import { ClientCookie } from "core/utils/tools";

const token = new ClientCookie().get(TOKEN);
const axiosHttp = makeAxiosHttpClient();
axiosHttp.setAuthorizationToken(token);


export { axiosHttp };
