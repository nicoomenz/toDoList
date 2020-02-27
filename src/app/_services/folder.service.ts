import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as env} from '../environments/environment';
import {Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

import {Item} from '../item';

@Injectable({ providedIn: 'root' })
export class FolderService {
  constructor(private http: HttpClient){}

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  getAll() {
    return this.http.get<Item[]>(`${env.url}/folderItemsList`)
  }

  register(description: string){
    return this.http.post<any>(`${env.url}/addFolderItem`, {description}).pipe(tap(() => {this._refreshNeeded$.next();}));
  }

  delete(id:number, description: string){
    return this.http.post<any>(`${env.url}/deleteFolderItem`, {id, description})
  }


}
