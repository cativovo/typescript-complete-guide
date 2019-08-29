/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

// Function kasi yung constructor, check yung ../../features/metadata.ts
// propertyKey = method names ng target,(Object.keys(targetPrototype))
// Methods enum makes sure that the values are always get, put, post, delete, or patch
// and Express.Router() has get, put, post, delete, patch methods
// therefore Typescript will not throw an error because it knows that Methods enum has only
// get, put, post, delete, and patch values
// Try to change Methods into string/any to see the error
export function controller(routePrefix: string): (target: Function) => void {
  return function readMetadata(target: Function): void {
    const router = AppRouter.getInstance();
    const targetPrototype = target.prototype;

    for (const propertyKey in targetPrototype) {
      const routeHandler = targetPrototype[propertyKey];
      const path: string = Reflect.getMetadata(MetadataKeys.Path, targetPrototype, propertyKey);
      const httpMethod: Methods = Reflect.getMetadata(
        MetadataKeys.HttpMethod,
        targetPrototype,
        propertyKey,
      );
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, propertyKey) || [];

      if (path) {
        router[httpMethod](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
