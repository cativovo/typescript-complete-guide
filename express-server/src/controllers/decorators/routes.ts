/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

const routeBinder = (httpMethod: string) => function factoryDecorator(path: string) {
  return function attachPathMetadata(target: any, propertyKey: string): void {
    Reflect.defineMetadata('path', path, target, propertyKey);
    Reflect.defineMetadata('httpMethod', httpMethod, target, propertyKey);
  };
};

const get = routeBinder('get');
const put = routeBinder('put');
const post = routeBinder('post');
const del = routeBinder('delete');
const patch = routeBinder('patch');

export {
  get, put, post, del, patch,
};
