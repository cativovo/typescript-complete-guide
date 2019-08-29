/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

const routeBinder = (httpMethod: string) => function factoryDecorator(path: string) {
  return function attachPathMetadata(target: any, propertyKey: string): void {
    Reflect.defineMetadata(MetadataKeys.path, path, target, propertyKey);
    Reflect.defineMetadata(MetadataKeys.httpMethod, httpMethod, target, propertyKey);
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
