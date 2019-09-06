import { Component, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Comment } from '../models/comment';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-comment',
  templateUrl: './modal-comment.component.html',
  styleUrls: ['./modal-comment.component.css']
})
export class ModalCommentComponent implements OnInit {
  blogCommentForm: FormGroup;
  commentObject: Comment;
  blogPostId: string = '';
  author:string = '';
  comment:string = '';
  params: object;
  commentId: string = '';

  constructor(public dialogRef: MatDialogRef<ModalCommentComponent>,     
    private router: Router, private route: ActivatedRoute, 
    private api: ApiService, 
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  {
    this.blogPostId = data.blogPostId;
    if (data.commentId != undefined)
    {
      this.commentId = data.commentId;
    }    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public onAdd = new EventEmitter();

  onClose(): void {     
    this.dialogRef.close(); 
  }

  ngOnInit() {
    this.blogCommentForm = this.formBuilder.group({
      'blogPostId': [null, Validators.required],
      'author': [null, Validators.required],
      'comment': [null, Validators.required],
    });

    if (this.commentId != '')
    {
      this.getCommentDetails(this.commentId);      
    }
    else
    {
      this.blogCommentForm.setValue({
        blogPostId: this.blogPostId,
        author: '',
        comment:''
      });
    }    
  }  

  getCommentDetails(id) {
    this.api.getCommentDetails(id)
      .subscribe(data => {
        console.log(data);
        this.commentObject = data;
        this.commentId = data._id;
        this.blogCommentForm.setValue({
          blogPostId: this.data.blogPostId,
          author: this.commentObject.author,
          comment: this.commentObject.comment
        });
      });
  }  
  
  onFormSubmit(form: NgForm) {
    this.onAdd.emit();
    if (this.commentId != '')
    {
      this.api.updateComment(this.commentId, form)
      .subscribe(data => {
        console.log(data);
        this.commentObject = data;
        this.commentId = data._id;
        this.blogCommentForm.setValue({
          blogPostId: this.data.blogPostId,
          author: this.commentObject.author,
          comment: this.commentObject.comment
        });
      });
    }
    else
    {
      this.api.saveComment(form)
      .subscribe(res => {                           
        }, (err) => {
          console.log(err);
        }
      );
    }    
    this.onClose();
  }
}
