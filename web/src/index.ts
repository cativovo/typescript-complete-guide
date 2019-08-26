import { User } from './models/User';
import { UserForm } from './views/UserForm';

const rootDiv = document.getElementById('root'); // try mo tanggalin yung assertion
const user = User.buildUser({ name: 'mark', age: 20 });

if (rootDiv) {
  const userForm = new UserForm(rootDiv, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
