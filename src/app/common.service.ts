import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit {

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
    this.getHouseData(eval)
  }
  HouserentDetails = new BehaviorSubject([]);
  Favourite = new BehaviorSubject([]);
  UserLogin = new BehaviorSubject('');
  // NavBarHide = 


  favouriteData(val:any){
    this.Favourite.next(val);
  }
  getHouseData(val:any){
    console.log(val,'service');
    this.HouserentDetails.next(val)
  }
  getJsonData(){
    return this.http.get('assets/Houses.json');
  }
  UserBehavior(data:any){
    this.UserLogin.next(data)
  }
}
