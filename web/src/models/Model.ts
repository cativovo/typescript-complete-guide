/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';
import { HasId } from './ApiSync';

interface ModelAttributes<T> {
  data: T;
  get<K extends keyof T>(key: K): T[K];
  set(updates: T): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>,
  ) {}

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(updates: T): void {
    this.attributes.set(updates);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (!id) {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id as number).then(
      (res: AxiosResponse): void => {
        this.set(res.data); // para matrigger yung 'change' event
      },
    );
  }

  save(): void {
    this.sync
      .save(this.attributes.data)
      .then((): void => this.events.trigger('save'))
      .catch((): void => this.events.trigger('error'));
  }
}
