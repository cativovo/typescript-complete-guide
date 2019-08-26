export class UserForm {
  constructor(public parent: HTMLElement) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': this.onButtonClick,
    };
  }

  onButtonClick(): void {
    console.log('click button');
  }

  template(): string {
    return `
        <div>
            <h1>User Form </h1>
            <input/>
            <button>Click me</button>
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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
