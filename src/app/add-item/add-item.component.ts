import { Component, OnInit } from '@angular/core';
import {Item} from '../item';
import {FolderItem} from '../folderItem';
import {Router, ActivatedRoute} from '@angular/router';
import {ItemControllerService} from '../_services/itemController.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  idFolder:string;
  addItemForm: FormGroup;
  submitted = false;
  items:Item[];
  private folder;
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
    this.idFolder=localStorage.getItem("idFolder");

    this.itemControllerService.refreshNeeded$
    .subscribe(() => {
      this.itemControllerService.getAll(+this.idFolder)
      .subscribe(data=>{this.items=data;});
    });

    this.itemControllerService.getAll(+this.idFolder)
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

    this.itemControllerService.register(this.f.description.value, +this.idFolder)
    .subscribe(
          data => {
            this.router.navigate(["app-add-item"]);

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
    this.folder = new FolderItem('',+this.idFolder);
    this.itemControllerService.delete(item.id, item.description, this.folder)
    .subscribe(data => {this.items=this.items.filter(i=>i!==item)})

  }

  home(){
    this.router.navigate(["app-folder-item"]);
  }


}
