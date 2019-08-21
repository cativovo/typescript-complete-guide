interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  private _events: { [key: string]: Callback[] } = {};

  constructor(private _data: UserProps) {}

  get(propName: string): string | number {
    return this._data[propName];
  }

  set(updates: UserProps): void {
    Object.assign(this._data, updates);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this._events[eventName] || [];
    handlers.push(callback);
    this._events[eventName] = handlers;
  }
}
