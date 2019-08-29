/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import 'reflect-metadata';
import {
  Request, Response, NextFunction, RequestHandler,
} from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

const bodyValidators = (keys: string[]): RequestHandler => (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.body) {
    res.status(422).send('Invalid request');
    return;
  }

  for (const key of keys) {
    if (!req.body[key]) {
      if (!req.body) {
        res.status(422).send('Invalid request');
        return;
      }
    }
  }

  next();
};

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

      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.Validator, target.prototype, propertyKey) || [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[httpMethod](`${routePrefix}${path}`, ...middlewares, validator, routeHandler);
      }
    }
  };
}
