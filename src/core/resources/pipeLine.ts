import { DataState } from "./dataState";

export interface IPipeLine {
  requestSuccess: (data: any) => void;
  requestFailed: (err: any) => DataState<any>;
  beforeRequest: <T>(data: T) => void;
}
