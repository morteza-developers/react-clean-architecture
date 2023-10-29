import { AxiosInstance } from "axios";
import {
  IHttpClient,
  IHttpClientDeleteDTO,
  IHttpClientGetDTO,
  IHttpClientPatchDTO,
  IHttpClientPostDTO,
  IHttpClientPutDTO,
  IResponse,
} from "./dtos/IHttpClient.dto";

class AxiosHttpClient implements IHttpClient {
 
  constructor(private readonly axiosInstance: AxiosInstance) {
   

    //   _httpInstance.interceptors.response.use(
    //     (response) => {
    //       if (response.status === 200) return response;
    //       if (response.status === 202) {
    //         window.location.replace("/login");
    //       }
    //       return response;
    //     },
    //     (error) => {
    //       if (
    //         error?.response?.status === 410 &&
    //         window.location.pathname != "/" &&
    //         window.location.pathname != "/"
    //       ) {
    //         window.location.replace("/access-denied");
    //       }
    //       throw error;
    //     },
    //   );
  }
  public get<TResponse>(
    url: string,
    { params = null, headers }: IHttpClientGetDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.axiosInstance({
      method: "GET",
      url,
      params,
      headers,
    });
  }

  public post<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPostDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.axiosInstance({
      method: "POST",
      url,
      params,
      data,
      headers,
    });
  }

  public put<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPutDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.axiosInstance({
      method: "PUT",
      url,
      params,
      data,
      headers,
    });
  }

  public patch<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPatchDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.axiosInstance({
      method: "PUT",
      url,
      params,
      data,
      headers,
    });
  }

  public delete<TResponse>(
    url: string,
    { params = null, headers }: IHttpClientDeleteDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.axiosInstance({
      method: "DELETE",
      url,
      params,
      headers,
    });
  }
  setDefaultsBaseUrl = (baseURL: string): void => {
    this.axiosInstance.defaults.baseURL = baseURL;
  };
  setsHeader = (key: string, value: string): void => {
    this.axiosInstance.defaults.headers[key] = value;
  };

  setAuthorizationToken = (token?: string | null) => {
    this.axiosInstance.defaults.headers.common["Authorization"] = token
      ? `Bearer ${token}`
      : null;
  };
}

export default AxiosHttpClient;
