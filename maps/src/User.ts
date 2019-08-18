import { name, address } from 'faker';
import { Mappable } from './Map';

export class User implements Mappable {
  public name: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = name.findName();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  public markerContent(): string {
    return this.name;
  }
}
