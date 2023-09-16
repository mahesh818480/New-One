import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  HouserentDetails = new BehaviorSubject([])

  getHouseData(val:any){
    console.log(val,'service')
    this.HouserentDetails.next(val)
  }
  getJsonData(){
    return this.http.get('assets/Houses.json')
  }
}
