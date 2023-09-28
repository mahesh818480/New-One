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
  selectdata: any='';
  array: any = [];
  amount: any='';
  bhkPrice: any;
  CountData: any;
  selectedProduct: any=[];
  filterBy:any;
  constructor(private http: HttpClient, private route: Router, private commonservice: CommonService) {
  }

  ngOnInit() {
    this.http.get('assets/Houses.json').subscribe((res: any) => {
      this.HouseArrayData = res.products;
      this.array = res.products;
    })
  }

  GotoDetailsPage(a: any) {
    this.selectedProduct = a;
    this.route.navigate(['/House-Details',a.id]);
  }
  SearchFilter(){
   this.array = this.HouseArrayData.filter((user:any) => user.title.includes(this.filterBy))
  }

  SelectDropDownData() {
    if(this.amount){
      let val1 =  Math.ceil(this.amount.split('-')[0]);
      let valu2 = Math.ceil(this.amount.split('-')[1]);
      this.array =  this.HouseArrayData.filter((val:any)=> val.Rent >= val1 && val.Rent <= valu2 && val.title == this.selectdata)
    }else{
      this.array = this.HouseArrayData.filter((val:any)=> val.title == this.selectdata);
    }
  }
  PriceList() {
    let val1 =  Math.ceil(this.amount.split('-')[0]);
    let valu2 = Math.ceil(this.amount.split('-')[1]);
    if(this.selectdata){
      let val1 =  Math.ceil(this.amount.split('-')[0]);
      let valu2 = Math.ceil(this.amount.split('-')[1]);
      this.array =  this.HouseArrayData.filter((val:any)=> val.Rent >= val1 && val.Rent <= valu2 && val.title == this.selectdata)
    }else{
      this.array = this.HouseArrayData.filter((val:any)=> val.Rent >= val1 && val.Rent <= valu2);
    }
  }
}
