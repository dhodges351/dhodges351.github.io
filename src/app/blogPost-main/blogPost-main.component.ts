import { Component, Inject, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Blogpost } from '../models/blogpost';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { BlogContent } from '../models/blogcontent';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPostListComponent } from '../blogPost-list/blogPost-list.component';
import { HomeComponent } from '../home/home.component';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-blogPost-main',
  templateUrl: './blogPost-main.component.html',
  styleUrls: ['./blogPost-main.component.css']
})

export class BlogPostMainComponent implements OnInit {
  blogContent: BlogContent;
  title: string = '';
  image: string = '';
  category: string = '';
  content: string = '';
  createdAt: string = '';
  blogs: Array<Blogpost>;
  filteredBlogs: Array<Blogpost>;
  error: {}; 
  newTabIndex: number;

  constructor(private transferService:TransferService, private router: Router, private route: ActivatedRoute, private apiService: ApiService, public dialog: MatDialog) 
  {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '600px', data: { title: '' },
    });
    
    const sub = dialogRef.componentInstance.onAdd.subscribe(() => {
      BlogPostListComponent.blogPostListApp.ngOnInit(); 
      HomeComponent.homeApp.selectedIndex = 1; 
    });

    dialogRef.afterClosed().subscribe(() => {
      const unsub = dialogRef.componentInstance.onAdd.unsubscribe();      
    });
  }

  ngOnInit() {    
    this.apiService.getAllBlogContent()
      .subscribe(res => {
        console.log(res); 
        if (res)
        {
          this.blogContent = res.filter(o => o.currentBlog == true);
          this.title = this.blogContent[0].title;
          this.image = this.blogContent[0].image;
          this.category = this.blogContent[0].category;
          this.content = this.blogContent[0].content;
          this.createdAt = this.blogContent[0].createdAt;
          //BlogPostListComponent.blogPostListApp.ngOnInit();         
        }       
      }, err => {
        console.log(err);
    });
  }  
}