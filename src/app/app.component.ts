import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertyfyService } from './services/alertyfy.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dhup...';

  constructor(private route:Router,private authservice:AuthService,private alertfy:AlertyfyService){}
  logout() {
    this.authservice.isUserLogOut();
    this.route.navigate(['']);
  }

}
