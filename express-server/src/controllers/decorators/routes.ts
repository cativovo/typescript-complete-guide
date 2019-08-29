/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { RequestHandler } from 'express';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

// para sure na may routehandler bago magamit yung routeBinder
// hindi yung kung anu-anong method lang
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

const routeBinder = (httpMethod: string) => function factoryDecorator(path: string) {
  return function attachMetadata(
    target: any,
    propertyKey: string,
    desc: RouteHandlerDescriptor,
  ): void {
    Reflect.defineMetadata(MetadataKeys.Path, path, target, propertyKey);
    Reflect.defineMetadata(MetadataKeys.HttpMethod, httpMethod, target, propertyKey);
  };
};

const get = routeBinder(Methods.Get);
const put = routeBinder(Methods.Put);
const post = routeBinder(Methods.Post);
const del = routeBinder(Methods.Del);
const patch = routeBinder(Methods.Patch);

export {
  get, put, post, del, patch,
};
