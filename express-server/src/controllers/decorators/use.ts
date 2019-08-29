/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function attachMiddlewareMetadata(target: any, propertyKey: string): void {
    const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target, propertyKey) || [];

    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      propertyKey,
    );
  };
}
