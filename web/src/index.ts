import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', (): void => console.log(user.get('name')));

user.fetch();

user.get = (test: string): void => console.log(test);
