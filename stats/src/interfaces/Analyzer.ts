export interface Analyzer<T> {
  run(data: T[]): string;
}
