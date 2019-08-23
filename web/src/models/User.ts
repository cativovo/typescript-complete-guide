import { config } from '../config';
import { Model } from './Model';
import { Attributes } from './Attributes';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Collection } from './Collection';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const USERS_URL = `${config.BACKEND_URL}/users`;

class User extends Model<UserProps> {
  // eslint-disable-next-line max-len
  static buildUser = (data: UserProps): User => new User(new Attributes<UserProps>(data), new Eventing(), new ApiSync<UserProps>(USERS_URL));

  // eslint-disable-next-line max-len
  static buildUserCollection = (): Collection<User, UserProps> => new Collection<User, UserProps>(USERS_URL, User.buildUser);
}

// eslint-disable-next-line no-undef
export { UserProps, USERS_URL, User };
