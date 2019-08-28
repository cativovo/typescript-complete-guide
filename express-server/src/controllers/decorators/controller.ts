/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

// Function kasi yung constructor, check yung ../../features/metadata.ts
// propertyKey = method names ng target,(Object.keys(targetPrototype))
export function controller(routePrefix: string): (target: Function) => void {
  return function readMetadata(target: Function): void {
    const router = AppRouter.getInstance();
    const targetPrototype = target.prototype;

    for (const propertyKey in targetPrototype) {
      const routeHandler = targetPrototype[propertyKey];
      const path = Reflect.getMetadata('path', targetPrototype, propertyKey);

      if (path) {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
