import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertyfyService } from '../services/alertyfy.service';
import { AuthService } from '../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '../common.service';
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
  retUrl:any;

  constructor(
    private route: Router,
    private alertyfy: AlertyfyService,
    private authService: AuthService,
    private activatedRoute:ActivatedRoute,
    private commanservice:CommonService
  ) { }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.retUrl = params.get('retUrl'); 
      console.log( 'LoginComponent/ngOnInit '+ this.retUrl);
    });
  }
  OnLogin(loginForm: NgForm) {
    const user = this.authService.addUsers(loginForm.value)
    console.log(user,'1010:::')
    if (user) {
      this.loader = true;
      this.commanservice.UserBehavior(user)
      setTimeout(() => {
        if (this.retUrl != null) {
          this.route.navigate([this.retUrl]);
        } else {
          this.route.navigate(['House']);
        }
        this.alertyfy.Success('successfully Registeted....');
      }, 1000)
    } else {
      this.alertyfy.Error();
    }
  }
  ForgetPassword(loginForm: NgForm) {
    this.ForegetFormsData = true;
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
