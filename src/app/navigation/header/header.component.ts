import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {    
  }

  @Output() public sidenavToggle = new EventEmitter();  

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();    
  }

}
