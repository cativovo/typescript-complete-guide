export class Attributes<T> {
  constructor(private _data: T) {}

  get(propName: string): string | number {
    return this._data[propName];
  }

  set(updates: T): void {
    this._data = { ...this._data, ...updates };
  }
}
