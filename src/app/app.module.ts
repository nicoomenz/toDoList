import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'


import { AppComponent } from './app.component';
import{AddItemComponent} from './add-Item/add-item.component'

const appRoutes: Routes = [
  { path:'app-add-item', component: AddItemComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent
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
