import { company, address } from 'faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  public name: string;
  public catchPhrase: string;
  public location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  public markerContent(): string {
    return `
      <div> 
        <h1>${this.name}</h1>
        <h3>${this.catchPhrase}</h3>
      </div>
    `;
  }
}
