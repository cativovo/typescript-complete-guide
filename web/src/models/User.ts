import axios, { AxiosResponse } from 'axios';
import { config } from '../config';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private USERS_URL = `${config.BACKEND_URL}/users`;

  constructor(private _data: UserProps) {}

  get(propName: string): string | number {
    return this._data[propName];
  }

  set(updates: UserProps): void {
    Object.assign(this._data, updates);
  }

  fetch(): void {
    axios
      .get(`${this.USERS_URL}/${this.get('id')}`)
      .then((res: AxiosResponse) => this.set(res.data));
  }

  save(): void {
    const id = this.get('id');
    const { _data } = this;

    if (id) {
      axios.put(`${this.USERS_URL}/${id}`, _data);
      return;
    }

    axios.post(this.USERS_URL, _data);
  }
}
