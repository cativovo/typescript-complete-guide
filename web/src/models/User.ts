interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private _data: UserProps) {}

  get(propName: string): string | number {
    return this._data[propName];
  }

  set(updates: UserProps): void {
    Object.assign(this._data, updates);
  }
}
