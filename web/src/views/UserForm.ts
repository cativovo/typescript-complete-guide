import { User } from '../models/User';

export class UserForm {
  constructor(public parent: HTMLElement, public model: User) {
    this.bindModel();
  }

  private bindModel(): void {
    this.model.on('change', (): void => {
      this.render();
    });
  }

  private eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick.bind(this),
    };
  }

  private onSetAgeClick(): void {
    this.model.setRandomAge();
  }

  private template(): string {
    const name = this.model.get('name');
    const age = this.model.get('age');
    return `
        <div>
            <h1>User Form </h1>
            <div>User name: ${name} </div>
            <div>User age: ${age}</div>
            <input/>
            <button class="set-age">Set Random Age</button>
        </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    const eventKeys = Object.keys(eventsMap);

    eventKeys.forEach((eventKey: string): void => {
      const [eventName, selector] = eventKey.split(':');
      const htmlElements = fragment.querySelectorAll(selector);

      htmlElements.forEach((htmlElement: Element): void => {
        htmlElement.addEventListener(eventName, eventsMap[eventKey]);
      });
    });
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
