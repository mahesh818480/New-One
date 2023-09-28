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
  HouserentDetails = new BehaviorSubject([])

  getHouseData(val:any){
    console.log(val,'service');
    this.HouserentDetails.next(val)
  }
  getJsonData(){
    return this.http.get('assets/Houses.json');
  }
}
