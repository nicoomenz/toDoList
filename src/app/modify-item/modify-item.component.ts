import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {Router} from '@angular/router';
import {ModifyItemService} from '../_services/modifyitem.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-item',
  templateUrl: './modify-item.component.html',
  styleUrls: ['./modify-item.component.css']
})
export class ModifyItemComponent implements OnInit {

  submitted = false;
  private item;
  modifyItemForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private modifyItemService: ModifyItemService,
              private router: Router){
                this.modifyItemForm = this.formBuilder.group({
                  description:''
              })
  }

  ngOnInit(){
      this.item = new Item('');
      this.editar(this.item);
      this.modifyItemForm = this.formBuilder.group({
        description:[this.item.description, Validators.pattern('[a-zA-Z0-9]*')]
      });
  }

  editar(item: Item){
    let id=localStorage.getItem("id");
    this.modifyItemService.getItemId(+id)
    .subscribe(data=>{
      this.item=data;
    });
  }

  save(itemsaved: Item){
    this.submitted = true;
    if (this.modifyItemForm.invalid){
      return;
    }
    console.log(this.item);
    this.modifyItemService.modify(itemsaved.id, itemsaved.description)
    .subscribe(data => {this.item=data; this.router.navigate(["app-add-item"]);})

  }

  cancel(){
    this.router.navigate(["app-add-item"]);
  }

}
