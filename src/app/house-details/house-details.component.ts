import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailsComponent {
  amount: any = 'Select Price';
  HouseArrayData: any = [];
  DetailsArray: any = [];
  productID: any;
  MainData: any;
  data: any;
  overAllData: any = [];
  array: any = [];
  selectFav: Boolean = false
  statusClass = 'not-active';
  data1: any = [];
  selectArray: any = [];
  selectedFavData: Boolean = false;
  FavouritesArry: any = [];
  FavouritesData: boolean = false;
  FrtarrayData: any = [];
  popup:boolean=false;
  // searchValue: any;
  searchValue: any;

  constructor(private service: CommonService, private route: ActivatedRoute, private router: Router) {
    this.service.Favourite.subscribe((res) => {
      this.FavouritesArry = res;
      console.log(res, '222222Res')
    })
    this.route.params.subscribe(
      params => {
        this.productID = params['products']
        console.log(params, '17::::', this.productID)
      }
    );
  }

  ngOnInit() {
    console.log('12dd3')
    this.service.getJsonData().subscribe((res: any) => {
      this.MainData = res.products;
      this.MainData.filter((val: any) => {
        console.log(val.id, this.productID, '888888888')
        if (val.id == this.productID) {
          this.DetailsArray.push(val)
        }
      })

    })
    this.service.getJsonData().subscribe((res: any) => {
      this.data = res.products;
      this.data.filter((val: any) => {
        this.DetailsArray.forEach((v: any) => {
          if (val.title.includes(v.title)) {
            console.log('123456', val)
            this.overAllData.push(val);
            this.array.push(val)
          }
        })
      })
    })
    this.array.forEach((val: any, i: any) => {
      this.array[i]['selectedFavData'] = false;
    })
  }
  PriceList() {
    let val1 = Number(this.amount.split('-')[0]);
    let valu2 = Number(this.amount.split('-')[1]);
    console.log(valu2, '2', this.overAllData);
    if (this.amount) {
      this.array = this.overAllData.filter((res: any) => res.Rent >= val1 && res.Rent <= valu2)
    } else {
      alert('Please Select Flat')
    }
  }
  setActiveClass() {
    this.statusClass = 'active';
  }
  GetSelectFave() {
    this.selectFav = !this.selectFav;
  }
  TotalDataFav(a: any) {
    console.log(a,'86:::')
    this.array.forEach((val: any, i: any) => {
      console.log(i, '1112',val)
      if (a == i && !val.selectedFavData) {
        this.array[i]['selectedFavData'] = true;
      } else if (a === i && val.selectedFavData) {
        this.array[i]['selectedFavData'] = false;
      }
    })
    console.log(this.MainData,'012',this.array)
    this.service.favouriteData(this.array.filter((val: any) => val.selectedFavData))
    console.log(this.array.filter((val: any) => val.selectedFavData), '105;;;')
  }
  FavouriteData() {
    this.router.navigate(['Favourite'])
  }
  GetOwnerDetails(){
    console.log('Hello')
    this.popup = true;
  }
  onlyNumbers(){
    let reg = /[0-9]/
    console.log(this.searchValue,'00000',reg)
  }
}
