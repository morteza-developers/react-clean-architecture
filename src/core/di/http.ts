import { makeAxiosHttpClient } from "core/factories/https/axiosHttpClientFactory";
import { TOKEN } from "core/utils/constants/storage";
import { ClientCookie } from "core/utils/tools";

const token = new ClientCookie().get(TOKEN);
//blog
const blogHttp = makeAxiosHttpClient();


// blogHttp.setDefaultsBaseUrl(makeBlogApiUrl());
blogHttp.setsHeader("Version-App", process.env.VERSION_APP!);
blogHttp.setAuthorizationToken(token);

//user
const userHttp = makeAxiosHttpClient();
// userHttp.setDefaultsBaseUrl(makeUserApiUrl());
userHttp.setsHeader("Version-App", process.env.VERSION_APP!);
userHttp.setAuthorizationToken(token);

export { userHttp, blogHttp };
