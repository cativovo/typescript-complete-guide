import { User } from './models/User';

const user = new User({ name: 'leo', age: 25, id: 1 });

// user.on('change', () => console.log('change 1'));
// user.on('change', () => console.log('change 2'));
// user.on('save', () => console.log('save was triggered'));

// user.trigger('change');

user.save();
