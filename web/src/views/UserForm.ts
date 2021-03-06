import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  protected eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick.bind(this),
      'click:.set-name': this.onSetNameClick.bind(this),
      'click:.save-user': this.onSaveUserClick.bind(this),
    };
  }

  protected template(): string {
    const name = this.model.get('name');
    return `
        <div>
            <h1>User Form </h1>
            <input placeholder="${name}"/>
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>
            <button class="save-user">Save User</button>
        </div>
    `;
  }

  private onSaveUserClick(): void {
    this.model.save();
  }

  private onSetAgeClick(): void {
    this.model.setRandomAge();
  }

  private onSetNameClick(): void {
    const input = this.parent.querySelector('input');

    if (input) this.model.set({ name: input.value });
  }
}
