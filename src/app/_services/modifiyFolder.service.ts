import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';

import {Item} from '../item';

@Injectable({ providedIn: 'root' })
export class ModifyFolderService {
  constructor(private http: HttpClient){}

  getItemId (id:number){
    return this.http.get<Item[]>(`${env.url}/folderForId/`+ id);
  }

  modifyFolder(id:number, description: string){
    return this.http.post<any>(`${env.url}/modifyFolderItem`, {id, description})
  }

}
