import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {Router, ActivatedRoute} from '@angular/router';
import {ItemControllerService} from '../_services/itemController.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  addItemForm: FormGroup;
  submitted = false;
  items:Item[];
  loading = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
              private itemControllerService: ItemControllerService,
              private route: ActivatedRoute,
              private router: Router){

    this.addItemForm = this.formBuilder.group({
        description:''
    })

  }

  ngOnInit(){
    this.itemControllerService.refreshNeeded$
    .subscribe(() => {
      this.itemControllerService.getAll()
      .subscribe(data=>{this.items=data;});
    });

    this.itemControllerService.getAll()
      .subscribe(data=>{this.items=data;});

    this.addItemForm = this.formBuilder.group({
      description:['', Validators.pattern('[a-zA-Z0-9]*')]
    });
  }

  get f(){ return this.addItemForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.addItemForm.invalid){
      return;
    }

    this.itemControllerService.register(this.f.description.value)
    .subscribe(
          data => {
            this.router.navigate([""]);

          },
          error => {
              this.error = 'Hubo un error';
              this.loading = false;
          });

  }

  edit(item:Item):void{

    localStorage.setItem("id", item.id.toString());
    this.router.navigate(["app-modify-item"]);


  }

  delete(item:Item):void{
    this.itemControllerService.delete(item.id, item.description)
    .subscribe(data => {this.items=this.items.filter(i=>i!==item)})

  }

}
