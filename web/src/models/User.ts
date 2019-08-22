import { config } from '../config';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const USERS_URL = `${config.BACKEND_URL}/users`;

export class User extends Model<UserProps> {
  // eslint-disable-next-line max-len
  static buidUser = (data: UserProps): User => new User(new Attributes<UserProps>(data), new Eventing(), new ApiSync<UserProps>(USERS_URL));
}
