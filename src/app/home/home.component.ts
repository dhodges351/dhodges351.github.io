import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { BlogPostListComponent } from '../blogPost-list/blogPost-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  static homeApp;
  public selectedIndex = 0;
  public selected = "../assets/exhibits/US Perfins - Their First Year.pdf";
  
  constructor(private data: DataService) 
  {
    this.data.tabListener.subscribe(newIndex => this.selectedIndex = newIndex);
  }

  ngOnInit() {
    HomeComponent.homeApp = this;
  }

  public executeSelectedChange = (event) => {
    console.log(event);   
    if (event.index == 1)
    {
      BlogPostListComponent.blogPostListApp.swapWhatIsOpen('list');
    }    
  }
}
