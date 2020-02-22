import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';

import {Item} from '../item';

@Injectable({ providedIn: 'root' })
export class AddItemService {
  constructor(private http: HttpClient){}

  getAll() {
    return this.http.get<Item[]>(`${env.url}/itemsList`)
  }

  register(description: string){
    return this.http.post<any>(`${env.url}/addItem`, {description})
  }

}
