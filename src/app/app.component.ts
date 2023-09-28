import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthService } from './services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  
  constructor(private route:Router,private authservice:AuthService,private alertfy:AlertyfyService){}
  logout() {
    this.authservice.isUserLogOut();
    this.alertfy.Success('successfully LogOut....');
    this.route.navigate(['']);
  }
  // contact(){
  //   this.navBar_Data = false;
  //   this.Contact_NavBard =true;
  
  // }
 
}
