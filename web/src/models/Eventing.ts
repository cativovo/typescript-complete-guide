type Callback = () => void;

export class Eventing {
  private _events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this._events[eventName] || [];
    handlers.push(callback);
    this._events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this._events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback: Callback): void => callback());
  };
}
