import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as alertyfy from 'alertifyjs';
import { AuthService } from '../services/auth.service';

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
  wwe: any;
  raw: any;
  constructor(private fb:FormBuilder,private route:Router , private service : AuthService){}
  ngOnInit(){
    // localStorage.getItem("data");
    this.signin = this.fb.group({
      file: [''],
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
    console.log(this.signin.value)
  //   this.wwe = localStorage.getItem('data') || '[]'
  //   this.raw = JSON.parse(this.wwe)
  //  this.raw.filter((val:any) =>{
  //   if(this.signin.controls?.['Username'].value === val.Username && this.signin.controls?.['Email'].value == val.Email){
  //     // this.route.navigate(['login'])
  //     console.log('hello')
  //   }
  //  })
    this.SubmitForm = true;
     this.service.updateMango(this.signin.value)
    if(this.signin.status === 'VALID'){
      console.log(this.signin.status)
      let data:any = localStorage.getItem('data') || '[]';
      this.register = JSON.parse(data);
      // this.register.filter(val => {
      //   if(val.Username === this.signin.controls?.['Username'].value && val.Email === this.signin.controls?.['Username'].value){
      //     alert('Same Name so Not Matched')
      //     console.log(val.Username,'1234')
      //   }
      // })
      console.log(this.register,'123',this.signin.controls?.['Username'].value)
     this.SignInForm_Data= this.register.push(this.signin.value);
      localStorage.setItem('data',JSON.stringify(this.register))
      this.route.navigate(['login'])
      alertyfy.success('successfully Registeted....');
    }
    else{
      alertyfy.error('please kindly proper Details...')
    }
  }
  // imageUrl: any = 'https://i.pinimg.com/236x/d6/27/d9/d627d9cda385317de4812a4f7bd922e9--man--iron-man.jpg';

  uploadFile(event:any) {
    let reader = new FileReader(); 
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.imageUrl = reader.result;
        this.signin.patchValue({
          file:reader.result
        });
      
      }
    }
  }
}
