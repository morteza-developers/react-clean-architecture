export class DataState<T> {
  status?: number;
  name = this.constructor.name;
  constructor(public data: T, public message?: string) {}
}

export class DataSuccess<T> extends DataState<T> {
  name = this.constructor.name;
  constructor(public data: T, message?: string) {
    super(data, message);
  }
}

export class DataFailed extends DataState<undefined> {
  name = this.constructor.name;
  constructor(message: string) {
    super(undefined, message);
  }
}

export class BadRequestException<T> extends DataState<T> {
  status = 404;
  name = this.constructor.name;
  constructor(data: T, message: string) {
    super(data, message);
  }
}

export class NetWorkException<T> extends DataState<T | undefined> {
  status = 500;
  name = this.constructor.name;
  constructor(message: string) {
    super(undefined, message);
  }
}

export class ServerException extends DataState<undefined> {
  status = 500;
  name = this.constructor.name;
  constructor(message: string) {
    super(undefined, message);
  }
}

export class UnhandledException<T> extends DataState<undefined> {
  status = 500;
  name = this.constructor.name;
  constructor(message: string) {
    super(undefined, message);
  }
}
