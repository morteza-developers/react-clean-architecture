export interface IHttpClientGetDTO {
  params?: any;
  headers?: Headers;
}

export interface IHttpClientPostDTO {
  data?: any;
  params?: any;
  headers?: Headers;
}

export interface IHttpClientPutDTO {
  data?: any;
  params?: any;
  headers?: Headers;
}

export interface IHttpClientPatchDTO {
  data?: any;
  params?: any;
  headers?: Headers;
}

export interface IHttpClientDeleteDTO {
  params?: any;
  headers?: Headers;
}

export interface IResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config?: any;
  request?: any;
}

export interface IHttpClient {
  get: <TResponse>(
    url: string,
    options?: IHttpClientGetDTO
  ) => Promise<IResponse<TResponse>>;
  post: <TResponse>(
    url: string,
    options?: IHttpClientPostDTO
  ) => Promise<IResponse<TResponse>>;
  put: <TResponse>(
    url: string,
    options: IHttpClientPutDTO
  ) => Promise<IResponse<TResponse>>;
  patch: <TResponse>(
    url: string,
    options?: IHttpClientPatchDTO
  ) => Promise<IResponse<TResponse>>;
  delete: <TResponse>(
    url: string,
    options?: IHttpClientDeleteDTO
  ) => Promise<IResponse<TResponse>>;
}

type HeaderValue = string | string[] | number | boolean | null;

interface RawHeaders {
  [key: string]: HeaderValue;
}
type Headers = {
  Accept?: HeaderValue;
  "Content-Length"?: HeaderValue;
  "User-Agent"?: HeaderValue;
  "Content-Encoding"?: HeaderValue;
  Authorization?: HeaderValue;
} & RawHeaders;
