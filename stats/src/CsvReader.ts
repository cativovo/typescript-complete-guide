import fs from 'fs';

export class CsvReader {
  private _data: string[][] = [];

  constructor(private _filename: string) {}

  get data(): string[][] {
    return this._data;
  }

  read(): void {
    this._data = fs
      .readFileSync(this._filename, 'utf-8')
      .split('\n')
      .map((line: string): string[] => line.split(','));
  }
}
