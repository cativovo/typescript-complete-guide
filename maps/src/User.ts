import { name, address } from 'faker';

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = name.findName();
    this.location = {
      lat: parseFloat(address.latitude()),
      long: parseFloat(address.longitude()),
    };
  }
}
