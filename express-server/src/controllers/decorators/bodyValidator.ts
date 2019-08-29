/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';

export function bodyValidator(...keys: string[]) {
  return function attachValidatorMetadata(target: any, propertyKey: string): void {
    Reflect.defineMetadata(MetadataKeys.Validator, keys, target, propertyKey);
  };
}
