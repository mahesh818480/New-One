import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isloggedIn: boolean;
  constructor(private route:Router) {
    this.isloggedIn = false;
   }

   isUserLoggedIn(): boolean {
    return this.isloggedIn;
  }
  isUserLogOut(){
    this.isloggedIn = false;
  }
  addUsers(user:any){
    console.log(user,'21:::')
    let UserArray:any =[];
    if(localStorage.getItem('data')){
      this.isloggedIn = true;
      var data:any = '';
      data = localStorage.getItem('data');
      UserArray = JSON.parse(data);
    }
    return UserArray.find((p:any) => p.Username === user.Login_Username && p.Password === user.Login_Password)
  }
  ForgetgetData(user:any){
    let UserArray:any =[];
    if(localStorage.getItem('data')){
      UserArray = JSON.parse(localStorage.getItem('data') || '[]');
    }
    return UserArray.find((p:any) => p.Username === user.Login_Username)
  }
}
