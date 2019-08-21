import { User } from './models/User';

const user = new User({ name: 'mark', age: 2 });

user.set({ age: 8 });

const name = user.get('name');
const age = user.get('age');

console.log(name, age);
