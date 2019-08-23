export class Attributes<T> {
  constructor(private _data: T) {}

  get data(): T {
    return this._data;
  }

  //   yung laman ng K ay mga key ng T,
  //   kunware pag yung UserProps interface yung ginamit,
  // id, name age yung mga type sa K
  //   yung pwedeng value lang nung key ay mga key ng T
  //   yung irereturn niya ay yung type based sa key ng T,
  //   for example, UserProps['id']: number; UserProps['name']:string; UserProps['age']:number;
  get<K extends keyof T>(key: K): T[K] {
    return this._data[key];
  }

  set(updates: T): void {
    this._data = { ...this._data, ...updates };
  }
}
