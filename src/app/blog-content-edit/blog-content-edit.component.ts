import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { BlogContent } from '../models/blogcontent';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { FileUploader} from 'ng2-file-upload';
import { DOCUMENT } from '@angular/common';

const URL = '/api/upload';

@Component({
  selector: 'app-blog-content-edit',
  templateUrl: './blog-content-edit.component.html',
  styleUrls: ['./blog-content-edit.component.css']
})
export class BlogContentEditComponent implements OnInit {
  public blogContent: BlogContent; 
  blogContentForm: FormGroup;
  id: string = '';
  currentBlog: boolean = false;
  image: string = '';
  title:string = '';
  category:string = '';
  content:string = '';
  imagePathAndFilename: string = '';
  uploadOnly: boolean = false;
  
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) 
  {     
  }

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    this.getBlogContentDetails(this.route.snapshot.params['id']);
    this.blogContentForm = this.formBuilder.group({
      'currentBlog' : [null, !Validators.required],
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
      this.imagePathAndFilename = 'assets/images/' + item._file.name;
      this.uploadOnly = true;
      this.blogContentForm.setValue({
        currentBlog: this.blogContent.currentBlog,
        image: this.imagePathAndFilename,     
        title: this.blogContent.title,
        category: this.blogContent.category,
        content: this.blogContent.content,
      });
   };     
  }
  
  getBlogContentDetails(id) {
    this.api.getBlogContentDetails(id).subscribe(data => {
      this.id = data._id;
      this.blogContent = data;
      this.blogContentForm.setValue({
        currentBlog: data.currentBlog,
        image: data.image,     
        title: data.title,
        category: data.category,
        content: data.content,
      });
    });
  }
  
  onFormSubmit(form: NgForm) {     
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
    var allBlogContent = []; 
    this.api.getAllBlogContent().subscribe(res => 
      {
        allBlogContent = res;
        for (var i = 0; i < allBlogContent.length; i++)
        {
          var data = allBlogContent[i];
          data.currentBlog = false;          
          var id = data._id;
          this.api.updateBlogContent(id, data)
            .subscribe(res => {}, (err) => {
              console.log(err);
            }
          );
        }

        this.api.updateBlogContent(this.id, form)
          .subscribe(res => {
            this.uploadOnly = false;
            this.imagePathAndFilename = '';
            this.router.navigate(['/allBlogContent']);               
          }, (err) => {
            console.log(err);       
          }
        );      
      }, err => {
        console.log(err);
      });         
  }

  allBlogContent() {
    this.router.navigate(['/allBlogContent']);
  } 

  returnToAllBlogContent()
  {
    this.router.navigate(['/allBlogContent']);
  }
  
}
