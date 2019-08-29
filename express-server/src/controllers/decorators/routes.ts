/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { Methods } from './Methods';

const routeBinder = (httpMethod: string) => function factoryDecorator(path: string) {
  return function attachPathMetadata(target: any, propertyKey: string): void {
    Reflect.defineMetadata('path', path, target, propertyKey);
    Reflect.defineMetadata('httpMethod', httpMethod, target, propertyKey);
  };
};

const get = routeBinder(Methods.get);
const put = routeBinder(Methods.put);
const post = routeBinder(Methods.post);
const del = routeBinder(Methods.del);
const patch = routeBinder(Methods.patch);

export {
  get, put, post, del, patch,
};
