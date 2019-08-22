export class Attributes<T> {
  constructor(private _data: T) {}

  //   yung laman ng K ay mga key ng T,
  //   kunware pag yung UserProps interface yung ginamit,
  // id, name age yung mga type sa K
  //   yung pwedeng value lang nung key ay mga key ng T
  get<K extends keyof T>(key: K): T[K] {
    return this._data[key];
  }

  set(updates: T): void {
    this._data = { ...this._data, ...updates };
  }
}
