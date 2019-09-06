import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn:boolean = false;
  email:string = '';
  password:string = '';  

  constructor(private api: ApiService, 
    private formBuilder: FormBuilder, 
    private router: Router, 
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  onFormSubmit(form: any) {
    // this.api.saveBlogContent(form)
    //   .subscribe(res => {          
           this.openSnackBar('Login successful!', '')
           this.router.navigate(['/home']); 
    //     }, (err) => {
    //       console.log(err);
    //     }
    //   );
  }
  
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top'
    });
 }
}
