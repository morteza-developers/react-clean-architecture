import { IHttpClient } from "infrastructure/http/dtos/IHttpClient.dto";
import AxiosHttpClient from "./axios";
import FetchHttpClient from "./fetch";
export type { IHttpClient };
export { AxiosHttpClient, FetchHttpClient };
