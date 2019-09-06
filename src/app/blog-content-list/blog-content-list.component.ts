import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-blog-content-list',
  templateUrl: './blog-content-list.component.html',
  styleUrls: ['./blog-content-list.component.css']
})

export class BlogContentListComponent implements OnInit {
  allBlogContent: any;
  displayedColumns = ['image', 'title', 'category', 'content', 'edit', 'delete'];  
  dataSource: any;

  constructor(@Inject(DOCUMENT) document, private route: ActivatedRoute, private api: ApiService, private router: Router) 
  {
  }

  ngOnInit() {
    this.api.getAllBlogContent()
      .subscribe(res => {
        console.log(res);
        this.allBlogContent = res;        
        this.dataSource = this.allBlogContent;        
      }, err => {
        console.log(err);
      });
  }
  
  deleteItem(id)
  {
    this.api.deleteBlogContent(id)
    .subscribe(res => {
        this.router.navigate(['/allBlogContent']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}