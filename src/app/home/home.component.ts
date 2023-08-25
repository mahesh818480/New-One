import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertyfyService } from '../services/alertyfy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  arr: any=[];

  constructor(private http:HttpClient,private alerty:AlertyfyService){
    
  }
  ngOnInit(){
    
  }
  getData(){
    this.alerty.PopUp('hello');
  }
}
