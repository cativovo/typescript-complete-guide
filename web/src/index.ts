import { User } from './models/User';
import { UserForm } from './views/UserForm';

const rootDiv = document.getElementById('root') as HTMLElement; // try mo tanggalin yung assertion
const user = User.buildUser({ name: 'mark', age: 20 });
const userForm = new UserForm(rootDiv, user);

userForm.render();
