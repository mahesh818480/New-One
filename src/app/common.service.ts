import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  HouserentDetails = new BehaviorSubject([])

  getHouseData(val:any){
    console.log(val,'service')
    this.HouserentDetails.next(val)
  }
}
