import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent {
  storeArray: any=[];
  constructor(private service:CommonService,private route:Router){}
  data1:any=[];

  ngOnInit(){
    this.service.Favourite.subscribe((res) =>{
      this.storeArray = res
      console.log(this.storeArray,'15',res)
    })
    // this.service.HouserentDetails.subscribe((res)=>{
    //   this.data1 = res;
    //   console.log(this.data1.products,'1111')
    // })
  }
  HomePage(){
    this.route.navigate(['House'])
  }
}
