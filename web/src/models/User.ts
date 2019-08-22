import { config } from '../config';
import { Eventing } from './Eventing';
import { Sync } from './Sync';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const USERS_URL = `${config.BACKEND_URL}/users`;

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync<UserProps>(USERS_URL);
}
