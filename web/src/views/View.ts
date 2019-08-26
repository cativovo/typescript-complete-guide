import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  protected abstract eventsMap(): { [key: string]: () => void };
  protected abstract template(): string;

  private bindModel(): void {
    this.model.on('change', (): void => {
      this.render();
    });
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
