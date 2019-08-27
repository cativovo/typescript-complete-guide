import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';
import { UserList } from './views/UserList';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps): User => User.buildUser(json),
);

users.on('change', (): void => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
