import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import{AddItemComponent} from './add-Item/add-item.component';
import{ModifyItemComponent} from './modify-item/modify-item.component';
import { FolderItemComponent } from './folder-item/folder-item.component';
import { ModifyFolderItemComponent } from './modify-folder-item/modify-folder-item.component';

const appRoutes: Routes = [
  { path:'', redirectTo: 'app-folder-item', pathMatch: 'full'},
  { path:'app-folder-item', component: FolderItemComponent},
  { path:'app-add-item', component: AddItemComponent},
  { path:'app-modify-item', component: ModifyItemComponent},
  { path:'app-modifyFolder-item', component: ModifyFolderItemComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ModifyItemComponent,
    FolderItemComponent,
    ModifyFolderItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
