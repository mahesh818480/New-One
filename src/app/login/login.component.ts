import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertyfyService } from '../services/alertyfy.service';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  loader: boolean = false;
  ForegetFormsData: boolean = false;

  constructor(
    private route: Router,
    private alertyfy: AlertyfyService,
    private authService: AuthService,
  ) { }
  ngOnInit() {
  }
  OnLogin(loginForm: NgForm) {
    const user = this.authService.addUsers(loginForm.value)
    if (user) {
      this.loader = true;
      setTimeout(() => {
        this.alertyfy.Success('successfully Registeted....');
        this.route.navigate([''])
      }, 2000)
    } else {
      this.alertyfy.Error();
    }
  }
  ForgetPassword(loginForm: NgForm) {
    this.ForegetFormsData = true;
    // this.popup = true
    console.log(loginForm.value, '38::')
  }
  Forget(ForgetForm: NgForm) {
    this.loader = false;
    const user = this.authService.ForgetgetData(ForgetForm.value);
    if (user) {
      this.alertyfy.Success('successfully Registeted....');
      this.alertyfy.alert(user.Password, user.Username);
      this.ForegetFormsData = false;
    }
    else {
      this.alertyfy.Error();
    }
  }
  close() {
    this.ForegetFormsData = false;
  }
}
