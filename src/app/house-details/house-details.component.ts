import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent {
  DetailsArray: any=[];
  constructor(private service:CommonService){}
    ngOnInit(){
      this.service.HouserentDetails.subscribe((res)=>{
        this.DetailsArray = res;
        console.log(this.DetailsArray,'1111')
      })
    }
    
}
