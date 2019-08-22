/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AxiosResponse } from 'axios';
import { config } from '../config';
import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const USERS_URL = `${config.BACKEND_URL}/users`;

export class User {
  attributes: Attributes<UserProps>;
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(USERS_URL);

  constructor(_data: UserProps) {
    this.attributes = new Attributes<UserProps>(_data);
  }

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(updates: UserProps): void {
    this.attributes.set(updates);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (!id) {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then(
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
