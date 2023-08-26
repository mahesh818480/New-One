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
  overall:boolean = true;
  title = 'Dhup...';
  @ViewChild('popup', {static: false}) popup: any;
  constructor(private route:Router,private authservice:AuthService,private alertfy:AlertyfyService){}
  logout() {
    this.authservice.isUserLogOut();
    this.route.navigate(['']);
  }
 
}
