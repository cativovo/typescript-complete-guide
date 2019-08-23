/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios, { AxiosResponse } from 'axios';
import { Eventing } from './Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (data: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch = (): void => {
    axios.get(this.rootUrl).then(
      (res: AxiosResponse): void => {
        const models = res.data.map(this.deserialize);
        this.models = models;
        this.events.trigger('change');
      },
    );
  };
}
