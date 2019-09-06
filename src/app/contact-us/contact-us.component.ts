import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Contact } from '../models/contact.model';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})

export class ContactUsComponent implements OnInit {
  public contact: Contact; 

  constructor(private api: ApiService, private router: Router, public snackBar: MatSnackBar) {
  	this.contact = new Contact();
  }

  ngOnInit() {
  }

  onSubmit()
  {
    if(this.contact.firstname && this.contact.lastname && this.contact.email 
      && this.contact.subject && this.contact.message) {
      this.api.saveContact(this.contact).subscribe(result => {
        console.log('result is ', result);
        if(result['_id'] != '') {
          this.openSnackBar('Message submitted', '')
          this.router.navigate(['/home']);
        } else {
          alert('Invalid form');
        }        
      }, error => {
        console.log('error is ', error);
      });
    } else {
      alert('enter all form fields');
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
}

}
