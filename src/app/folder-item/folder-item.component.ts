import { Component, OnInit } from '@angular/core';
import {FolderItem} from '../folderItem';
import {Router, ActivatedRoute} from '@angular/router';
import {FolderService} from '../_services/folder.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-folder-item',
  templateUrl: './folder-item.component.html',
  styleUrls: ['./folder-item.component.css']
})
export class FolderItemComponent implements OnInit {


  folders:FolderItem[];
  addFolderItemForm: FormGroup;
  submitted = false;
  error = '';

  constructor(private formBuilder: FormBuilder,
    private folderService: FolderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.folderService.refreshNeeded$
    .subscribe(() => {
      this.folderService.getAll()
      .subscribe(data=>{this.folders=data;});
    });

    this.folderService.getAll()
      .subscribe(data=>{this.folders=data;});

    this.addFolderItemForm = this.formBuilder.group({
      description:['', Validators.pattern('[a-zA-Z0-9]*')]
    });

  }

  get f(){ return this.addFolderItemForm.controls;}

  onSubmit() {
    this.submitted = true;
    if (this.addFolderItemForm.invalid){
      return;
    }

    this.folderService.register(this.f.description.value)
    .subscribe(
          data => {
            this.router.navigate([""]);

          },
          error => {
              this.error = 'Hubo un error';
          });

  }


  edit(folder: FolderItem):void{

    localStorage.setItem("id", folder.id.toString());
    this.router.navigate(["app-modifyFolder-item"]);

  }

  delete(folder: FolderItem){
    this.folderService.delete(folder.id, folder.description)
    .subscribe(data => {this.folders=this.folders.filter(f=>f!==folder)})

  }

  viewItems(folder: FolderItem){
    localStorage.setItem("idFolder", folder.id.toString());
    this.router.navigate(["app-add-item"]);

  }

}
