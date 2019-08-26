import { UserForm } from './views/UserForm';

const rootDiv = document.getElementById('root') as HTMLElement; // try mo tanggalin yung assertion
const userForm = new UserForm(rootDiv);

userForm.render();
