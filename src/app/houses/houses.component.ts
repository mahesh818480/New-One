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
  array: any = [];
  amount:any;
  b: any=[];
  ProdData:any[]=[];
  amountCount: any=[];
  bhkPrice: any;
  booleanBhk: boolean =false;
  priceBoolean: boolean =false;
  constructor(private http: HttpClient, private route: Router, private commonservice: CommonService) {
  }

  ngOnInit() {
    // this.commonservice.getJsonData().subscribe((res:any) =>{
    //   this.HouseArrayData = res.products;
    //   console.log(this.HouseArrayData,'28::')
    // })
    this.http.get('assets/Houses.json').subscribe((res: any) => {
      this.HouseArrayData = res.products;
      this.array = res.products;
      // this.amountCount = res.products;
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
    this.booleanBhk = true;
    console.log(this.selectdata)
    let a: any = [];
    // if(!this.priceBoolean){
    this.HouseArrayData.forEach((res: any) => {
      if (res.title == this.selectdata) {
        a.push(res);
      }
    });
  // }
  // if(this.priceBoolean){
  //     // this.PriceList()
  //     console.log('234234')
  //     this.array.forEach((v:any)=>{
  //       console.log(v,'0909090')
  //       if(v.title == this.selectdata){
  //         a.push(v)
  //       }
  //     })
  //   }
    this.array = a;
    console.log(this.array,'9090')
  }
  PriceList(){
    this.priceBoolean = true ;
    this.b=[]
    console.log(this.HouseArrayData,'111111',Number(this.amount.split('-')[0]),Number(this.amount.split('-')[1]))
    let val1 =Number(this.amount.split('-')[0]);
    let valu2 =Number(this.amount.split('-')[1])
    if(!this.booleanBhk){
      this.HouseArrayData.forEach((val:any) => {    
        console.log(val.price,'0000')
        if(val.price >= val1 && val.price <= valu2){
          this.b.push(val)
          console.log(this.b,'7777:::',this.amount)
        }
        
      })
    }
    // if(this.booleanBhk){
    //   this.myyy()
    //   let val1 =Number(this.amount.split('-')[0]);
    //   let valu2 =Number(this.amount.split('-')[1])
    //   this.array.forEach((val:any)=>{
    //     console.log(val,'9898')
    //     if(val.price >= val1 && val.price <= valu2){
    //       this.b.push(val)
    //       console.log(this.b,'7777:::',this.amount)
    //     }
    //   })
    // }
    this.array = this.b;
    console.log(this.array,'80')
  }
}
