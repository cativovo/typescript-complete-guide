import fs from 'fs';

// Sync reader
export abstract class CsvFileReader {
  protected data: string[][] = [];

  constructor(private _filename: string) {}

  protected read(): void {
    this.data = fs
      .readFileSync(this._filename, 'utf-8')
      .split('\n')
      .map((line: string): string[] => line.split(','));
  }
}
