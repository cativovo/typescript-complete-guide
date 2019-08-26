import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  protected regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  protected abstract template(): string;

  protected eventsMap(): { [key: string]: () => void } {
    return {};
  }

  protected regionsMap(): { [key: string]: string } {
    return {};
  }

  protected mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    const keys = Object.keys(regionsMap);

    keys.forEach((key: string): void => {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    });
  }

  protected onRender(): void {}

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

    const fragment = templateElement.content;

    this.bindEvents(fragment);
    this.mapRegions(fragment);
    this.onRender();
    this.parent.append(fragment);
  }
}
