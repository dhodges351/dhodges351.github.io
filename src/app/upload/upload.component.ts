import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'
import { DialogComponent } from './dialog/dialog.component'
//import { UploadService } from './upload.service'
import { FileUploader} from 'ng2-file-upload';

const URL = '/api/upload';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})

export class UploadComponent {
  title = 'Upload';

  constructor(public dialog: MatDialog, ) {} 
  //public uploadService: UploadService

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '50%',
      height: '50%',
    });
  }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
 }
 
}