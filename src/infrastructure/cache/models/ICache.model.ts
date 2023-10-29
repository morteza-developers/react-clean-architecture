export default interface ICacheModel {
  set(key: string, value: string): void;
  get<T>(key: string): T | null;
}
