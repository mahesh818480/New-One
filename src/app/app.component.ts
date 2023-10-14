import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthService } from './services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from './common.service';
import { Dropdown} from 'bootstrap'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navBar_Data:boolean= false;
  navdata:boolean=true;
  Contact_NavBard:boolean =false;
  overall:boolean = true;
  title = 'Dhup...';
  storeUser: any=[];
  dummy:boolean = false;
  Avatar:boolean = false;
  storeArray: any=[];
  TotalNavBar:boolean=true
  favvvT: any=[];

  constructor(private route:Router,private authservice:AuthService,private sevicecomman : CommonService,private alertfy:AlertyfyService,private service:CommonService){}
  ngOnInit(){
    this.service.UserLogin.subscribe((res) =>{
      console.log(res,'000')
      if(this.storeUser = res){
        this.Avatar=true
      }
      console.log(res,'23==:::::', this.storeUser)
    })
  this.sevicecomman.Favourite.subscribe((res) =>{
    this.favvvT = res
    console.log(res,'favvvvvk')
  })
  }
  ProfileData(){
    this.dummy=true;
  }
  logout() {
    this.authservice.isUserLogOut();
    this.Avatar = false;
    this.alertfy.Success('successfully LogOut....');
    this.route.navigate(['']);
  }
  toggle(modalElement:any){
    const modal=new Dropdown(modalElement);
    modal.toggle();
  }
  goToFavPage(){
    this.route.navigate(['Favourite'])
  }
  // contact(){
  //   this.navBar_Data = false;
  //   this.Contact_NavBard =true;
  
  // }
 
}
