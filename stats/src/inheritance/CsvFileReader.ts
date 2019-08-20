import fs from 'fs';

// Sync reader
export abstract class CsvFileReader<T> {
  protected data: T[] = [];

  constructor(private _filename: string) {}

  protected abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this._filename, 'utf-8')
      .split('\n')
      .map((line: string): string[] => line.split(','))
      .map(this.mapRow);
  }
}
