import { Component, OnInit } from '@angular/core';
import {FolderItem} from '../folderItem';
import {Router} from '@angular/router';
import {ModifyFolderService} from '../_services/modifiyFolder.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modify-folder-item',
  templateUrl: './modify-folder-item.component.html',
  styleUrls: ['./modify-folder-item.component.css']
})
export class ModifyFolderItemComponent implements OnInit {

  submitted = false;
  private folder;
  modifyFolderForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
              private modifyFolderService: ModifyFolderService,
              private router: Router) {

    this.modifyFolderForm = this.formBuilder.group({
      description:''
    })
  }


  ngOnInit() {
    this.folder = new FolderItem('', 1);
      this.editar(this.folder);
      this.modifyFolderForm = this.formBuilder.group({
        description:[this.folder.description, Validators.pattern('[a-zA-Z0-9]*')]
      });
  }

  editar(folder: FolderItem){
    let id=localStorage.getItem("id");
    this.modifyFolderService.getItemId(+id)
    .subscribe(data=>{
      this.folder=data;
    });
  }

  save(foldersaved: FolderItem){
    this.submitted = true;
    if (this.modifyFolderForm.invalid){
      return;
    }
    console.log(this.folder);
    this.modifyFolderService.modifyFolder(foldersaved.id, foldersaved.description)
    .subscribe(data => {this.folder=data; this.router.navigate(["app-folder-item"]);})

  }

  cancel(){
    this.router.navigate(["app-folder-item"]);
  }

}
