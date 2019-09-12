import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploader} from 'ng2-file-upload';
import { Blogpost } from '../models/Blogpost';
import { MatSnackBar } from '@angular/material/snack-bar';

const URL = '/api/upload';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  public blogPost: Blogpost;
  blogPostForm: FormGroup;
  id: string = '';
  title: string = '';
  category: string = '';
  short_desc:string = '';
  author:string = '';
  image: string = '';
  imagePathAndFilename: string = '';
  uploadOnly: boolean = false;
  matcher: string = '';
  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  constructor(public dialogRef: MatDialogRef<ModalComponent>,     
    private router: Router, private route: ActivatedRoute, 
    private api: ApiService, 
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar    
  ) 
  { }  

  onNoClick(): void {
    this.dialogRef.close();
  } 

  public onAdd = new EventEmitter();

  onClose(): void {
    this.dialogRef.close();
  }  

  ngOnInit() {
    this.blogPost = new Blogpost();
    this.blogPostForm = this.formBuilder.group({
      'title' : [null, !Validators.required],
      'category' : [null, !Validators.required],
      'short_desc' : [null, Validators.required],
      'author' : [null, Validators.required],
      'image' : [null, !Validators.required],
    });

    this.uploader.onAfterAddingFile = (file) => {      
      file.withCredentials = false; 
    };

    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('ImageUpload:uploaded:', item, status, response);       
        this.imagePathAndFilename = 'assets/images/' + item._file.name;
        this.blogPost = this.blogPostForm.getRawValue();
        this.blogPostForm.setValue({        
          image: this.imagePathAndFilename,     
          title: this.blogPost.title,
          category: this.blogPost.category,
          author: this.blogPost.author,
          short_desc: this.blogPost.short_desc,
        });
     };     
  }

  getBlogPost(id) {
    this.api.getBlogPost(id).subscribe(data => {
      this.id = data._id;
      this.blogPostForm.setValue({
        title: data.title,
        category: data.category,
        short_desc: data.short_desc,
        author: data.author,
        image: data.image
      });
    });
  } 
  
  onFormSubmit(form: NgForm) {
    this.onAdd.emit();
    this.api.postBlogPost(form)
      .subscribe(res => {
        this.openSnackBar('Blog post submitted!', '');
        }, (err) => {
          console.log(err);
        }
      );
      this.onClose();        
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
 }
}
