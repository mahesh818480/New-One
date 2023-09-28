import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent {
  amount: any='Select Price';
  HouseArrayData: any = [];
  DetailsArray: any=[];
  productID: any;
  MainData:any;
  data: any;
  overAllData: any=[];
  array: any =[];
  selectFav:Boolean=false
  statusClass = 'not-active';
  constructor(private service:CommonService,private route: ActivatedRoute){
    this.route.params.subscribe(
      params =>{ 
       this.productID = params['products']
        console.log(params,'17::::',this.productID)   
    }
      );
  }

    ngOnInit(){
      this.service.getJsonData().subscribe((res:any) =>{
        this.MainData = res.products;
        this.MainData.filter((val:any) =>{
          console.log(val.id,this.productID,'888888888')
          if(val.id == this.productID){
            this.DetailsArray.push(val)
          }
        })

      })
      this.service.getJsonData().subscribe((res:any) =>{
        this.data = res.products;
        this.data.filter((val:any) =>{
          this.DetailsArray.forEach((v:any)=>{
            if(val.title.includes(v.title)){
              console.log('123456',val)
              this.overAllData.push(val);
              this.array.push(val)
            }
          })
        })
      })
      // this.service.HouserentDetails.subscribe((res)=>{
      //   this.DetailsArray = res;
      //   console.log(this.DetailsArray,'1111')
      // })
    }
    PriceList() {
      let val1 = Number(this.amount.split('-')[0]);
      let valu2 = Number(this.amount.split('-')[1]);
      console.log(valu2, '2', this.overAllData)
      if(this.amount){
        this.array = this.overAllData.filter((res: any) =>res.Rent >= val1 && res.Rent <= valu2)
        console.log(this.array,'0000000000000')
      }else{
        alert('Please Select Flat')
      }
    }
    setActiveClass(){
      this.statusClass = 'active';
    }
    GetSelectFav(){
      this.selectFav = !this.selectFav
    }
    
}
