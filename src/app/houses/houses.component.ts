import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {

  HouseArrayData: any = [];
  arrayData: any = [];
  searchText: any;
  selectdata: any;
  array: any = []
  constructor(private http: HttpClient, private route: Router, private commonservice: CommonService) {
  }
  ngOnInit() {
    this.http.get('assets/Houses.json').subscribe((res: any) => {
      this.HouseArrayData = res.products;
      this.array = res.products
    })
  }

  GotoDetailsPage(a: any) {
    this.commonservice.HouserentDetails.subscribe((res) => {
      this.arrayData = res
    })
    this.arrayData.push(a);
    this.commonservice.getHouseData(this.arrayData)
    this.route.navigate(['/House-Details'])
  }

  myyy() {
    console.log(this.selectdata)
    let a: any = [];
    this.HouseArrayData.forEach((res: any) => {
      if (res.title == this.selectdata) {
        a.push(res);
      }
    });
    this.array = a;
  }
}
