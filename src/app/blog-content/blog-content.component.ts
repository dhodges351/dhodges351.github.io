import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { BlogContent } from '../models/blogcontent';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploader} from 'ng2-file-upload';
import { DOCUMENT } from '@angular/common'; 

const URL = '/api/upload';

@Component({
  selector: 'app-blog-content',
  templateUrl: './blog-content.component.html',
  styleUrls: ['./blog-content.component.css']
})

export class BlogContentComponent implements OnInit {
  public blogContent: BlogContent; 
  blogContentForm: FormGroup;
  currentBlog:boolean = false;
  image:string = '';
  title:string = '';
  category:string = '';
  content:string = '';
  imagePathAndFilename: string = '';
  uploadOnly: boolean = false;
  matcher: string = '';

  constructor(@Inject(DOCUMENT) document, private api: ApiService, private formBuilder: FormBuilder, private router: Router, public snackBar: MatSnackBar) {
  	this.blogContent = new BlogContent();
  }

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.blogContentForm = this.formBuilder.group({
      'currentBlog': [null, !Validators.required],
      'image' : [null, !Validators.required],
      'title' : [null, Validators.required],
      'category' : [null, Validators.required],
      'content' : [null, Validators.required],
    });
    
    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false;    
      
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
        console.log('ImageUpload:uploaded:', item, status, response);       
        this.imagePathAndFilename = '/uploads/' + item._file.name;
        this.uploadOnly = true;
     };     
  } 

  onFormSubmit(form: any) {
    form.image = this.imagePathAndFilename;
    if (!this.uploadOnly)
    {
      if (
        this.blogContentForm.get('currentBlog').touched ||
        this.blogContentForm.get('title').touched ||
        this.blogContentForm.get('category').touched ||
        this.blogContentForm.get('content').touched
      )
      {       
        this.completeSubmit(form);
      }
      else
      {
        return;
      }      
    }
    else
    {
      this.completeSubmit(form);
    }       
  }

  completeSubmit(form)
  {
    this.api.saveBlogContent(form)
      .subscribe(res => {
          let id = res['_id'];
          this.openSnackBar('Blog content submitted!', '')
          this.router.navigate(['/allBlogContent']);
          this.uploadOnly = false;
          this.imagePathAndFilename = '';
          form.image = '';   
        }, (err) => {
          console.log(err);
        }
      );
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
 }

}
