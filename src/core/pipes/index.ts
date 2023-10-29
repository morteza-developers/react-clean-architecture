import i18n from "core/lang";
import {
  BadRequestException,
  DataState,
  NetWorkException,
  ServerException,
  UnhandledException,
} from "core/resources/dataState";
import { IPipeLine } from "core/resources/pipeLine";

export class DefaultPipeLine implements IPipeLine {
  beforeRequest = () => {};

  requestSuccess = (data: any): void => {};

  private getErrorMessage = (data: any) => {
    if (!data?.data) return undefined;
    if (Array.isArray(data?.data.message)) {
      return data.data.message[0];
    } else {
      return data.data.message;
    }
  };

  requestFailed = (err: any): DataState<any> => {
    if (!err.response) {
      if (err.message == "Network Error")
        throw new NetWorkException(i18n.t("Please check your internet"));
      else throw new UnhandledException(err.message);
    }
    const data = err.response;
    const message = this.getErrorMessage(data) || err.message;
    switch (err.response?.status) {
      case 404:
        throw new BadRequestException(data, message);
      case 500:
        throw new ServerException(i18n.t("Server error try again"));
      default:
        throw new BadRequestException(data, message);
    }
  };
}
