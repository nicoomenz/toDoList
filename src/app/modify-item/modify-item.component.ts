import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {Router} from '@angular/router';
import {ModifyItemService} from '../_services/modifyitem.service';
import { setTNodeAndViewData } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {

  private item;
  constructor(private modifyItemService: ModifyItemService,
              private router: Router){

  }

  ngOnInit(){
      this.item = new Item('');
      this.editar(this.item);
  }

  editar(item: Item){
    let id=localStorage.getItem("id");
    this.modifyItemService.getItemId(+id)
    .subscribe(data=>{
      this.item=data;
    });
  }

  save(itemsaved: Item){
    console.log(itemsaved);
    this.modifyItemService.modify(itemsaved.id, itemsaved.description)
    .subscribe(data => {this.item=data; this.router.navigate(["app-add-item"]);})

  }

  cancel(){
    this.router.navigate(["app-add-item"]);
  }

}
