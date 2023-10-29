import axios, { AxiosRequestTransformer } from "axios";
import { TOKEN } from "core/utils/constants/storage";
import { ClientCookie } from "core/utils/tools";
import { AxiosHttpClient } from "infrastructure/http";



const convertToList = (data: any): Array<AxiosRequestTransformer> => {
  if (data) {
    if (Array.isArray(data)) return data;
    return [data];
  }
  return [];
};


export const makeAxiosHttpClient = (): AxiosHttpClient =>
  new AxiosHttpClient(
    axios.create(
    //   {
    //   transformRequest: [
    //     (data, headers) => {
    //       headers.setAuthorization(
    //         `Bearer ${new ClientCookie().get(TOKEN) || ""}`
    //       );
    //       return data;
    //     },
    //     ...convertToList(axios.defaults.transformRequest)
    //   ],
    // }
    )
  );
