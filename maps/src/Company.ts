import { company, address } from 'faker';

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      long: parseFloat(address.longitude()),
    };
  }
}
