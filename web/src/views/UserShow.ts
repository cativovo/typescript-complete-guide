import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  protected template(): string {
    const name = this.model.get('name');
    const age = this.model.get('age');

    return `
        <div>
            <h1>User Detail </h1>
            <div>User Name: ${name} </div>
            <div>User Age: ${age} </div>
        </div>
      `;
  }
}
