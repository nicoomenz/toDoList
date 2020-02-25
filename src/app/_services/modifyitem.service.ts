import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';

import {Item} from '../item';

@Injectable({ providedIn: 'root' })
export class ModifyItemService {
  constructor(private http: HttpClient){}

  getItemId (id:number){
    return this.http.get<Item[]>(`${env.url}/itemForId/`+ id);
  }

  modify(id:number, description: string){
    return this.http.post<any>(`${env.url}/modifyItem`, {id, description})
  }

}
