import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {FolderItem} from '../folderItem';

import {Item} from '../item';

@Injectable({ providedIn: 'root' })
export class ItemControllerService {
  constructor(private http: HttpClient){}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  /*getAll() {
    return this.http.get<Item[]>(`${env.url}/itemsList`)
  }*/

  getAll (idFolder:number){
    return this.http.get<Item[]>(`${env.url}/itemsList/`+ idFolder);
  }

  register(description: string, idFolder:number){
    return this.http.post<any>(`${env.url}/addItem`, {description, idFolder}).pipe(tap(() => {this._refreshNeeded$.next();}));
  }

  delete(id:number, description: string, folder: FolderItem){
    return this.http.post<any>(`${env.url}/deleteItem`, {id, description, folder})
  }


}
