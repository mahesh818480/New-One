import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertyfyService } from '../services/alertyfy.service';
import { AuthService } from '../services/auth.service';
// import * as alertyfy from 'alertifyjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login!: FormGroup;
  FormsData: any;
  storeValue: any;
  loader :boolean= false;

  constructor(private fb: FormBuilder,
              private route: Router,
              private alertyfy: AlertyfyService,
              private authService:AuthService,
              ) { }
  ngOnInit() {
  }

  OnLogin(loginForm: NgForm){
    console.log(loginForm.value,'27::::')
    const user = this.authService.addUsers(loginForm.value)
    if(user){
      this.loader = true;
      setTimeout(()=>{
        this.alertyfy.Success();
        this.route.navigate([''])
      },2000)
    }else{
      this.alertyfy.Error();
    }
  }
  ForgetPassword(loginForm: NgForm){
   console.log(loginForm.value,'38::')
    
  }
  Forget(ForgetForm:NgForm){
    this.loader = true;
    console.log(ForgetForm.value,'51:::')
    const user = this.authService.ForgetgetData(ForgetForm.value);
    if(user){
      this.alertyfy.Success();
      this.alertyfy.alert(user.Password, user.Username);
    }
    else{
      this.alertyfy.Error();
    }

  }
}
