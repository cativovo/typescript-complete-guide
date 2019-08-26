import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const rootDiv = document.getElementById('root'); // try mo tanggalin yung assertion
const user = User.buildUser({ name: 'mark', age: 20 });

if (rootDiv) {
  const userEdit = new UserEdit(rootDiv, user);
  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
