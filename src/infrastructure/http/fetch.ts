import {
  IHttpClient,
  IHttpClientDeleteDTO,
  IHttpClientGetDTO,
  IHttpClientPatchDTO,
  IHttpClientPostDTO,
  IHttpClientPutDTO,
  IResponse,
} from "./dtos/IHttpClient.dto";
class FetchHttpClient implements IHttpClient {
  constructor(private readonly fetchInstance: typeof fetch) {
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
    return this.fetchInstance(url, {
      method: "GET",
    }).then(async (r) => {
      return {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as any,
      };
    });
  }

  public post<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPostDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.fetchInstance(url, {
      method: "POST",
      body: data,
    }).then(async (r) => {
      return {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as any,
      };
    });
  }

  public put<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPutDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.fetchInstance(url, {
      method: "PUT",
      body: data,
    }).then(async (r) => {
      return {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as any,
      };
    });
  }

  public patch<TResponse>(
    url: string,
    { params = null, data = null, headers }: IHttpClientPatchDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.fetchInstance(url, {
      method: "PUT",
      body: data,
    }).then(async (r) => {
      return {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as any,
      };
    });
  }

  public delete<TResponse>(
    url: string,
    { params = null, headers }: IHttpClientDeleteDTO = {}
  ): Promise<IResponse<TResponse>> {
    return this.fetchInstance(url, {
      method: "DELETE",
      body: params,
    }).then(async (r) => {
      return {
        data: await r.json(),
        status: r.status,
        statusText: r.statusText,
        headers: r.headers as any,
      };
    });
  }
  setsHeader = (key: string, value: string): void => {
    // this.fetchInstance.defaults.headers[key] = value;
  };

  setAuthorizationToken = (token?: string | null) => {
    // this.fetchInstance.defaults.headers.common["Authorization"] = token
    //   ? `Bearer ${token}`
    //   : null;
  };
}

export default FetchHttpClient;
