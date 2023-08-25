import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  'signin':FormGroup<any>;
  SubmitForm=false;
  
  emailRegEx = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  register:any[]=[];
  SignInForm_Data: any;
  constructor(private fb:FormBuilder,private route:Router){}
  ngOnInit(){
    // localStorage.getItem("data");
    this.signin = this.fb.group({
      Username:['',Validators.required],
      Email:['',Validators.compose([Validators.required,Validators.pattern(this.emailRegEx)])],
      Password: ['', Validators.compose([Validators.required,Validators.minLength(3)])]
    })
    
  }
  get name(){
    return this.signin.get('Username')
  }
  get email(){
    return this.signin.get('Email')
  }
  get password(){
    return this.signin.get('Password')
  }
  SigninForm(){
    this.SubmitForm = true;
    
    if(this.signin.status === 'VALID'){
      let data:any = localStorage.getItem('data') || '[]';
      this.register = JSON.parse(data);
      console.log(this.register,'123')
     this.SignInForm_Data= this.register.push(this.signin.value);
      console.log( this.SignInForm_Data,'encode')
      localStorage.setItem('data',JSON.stringify(this.register))
      this.route.navigate(['login'])
      console.log(this.signin.value,'21:::',encodeURI(this.signin.value))
      alertyfy.success('successfully Registeted....');
    }
    else{
      alertyfy.error('please kindly proper Details...')
    }
  }
  

}
