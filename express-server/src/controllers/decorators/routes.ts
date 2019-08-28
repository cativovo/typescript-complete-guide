/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

export function get(path: string) {
  return function attachPathMetaData(target: any, propertyKey: string): void {
    Reflect.defineMetadata('path', path, target, propertyKey);
  };
}
