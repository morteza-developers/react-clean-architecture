export type UseCase<P, T> = {
  execute: (data: P) => Promise<T>;
};
