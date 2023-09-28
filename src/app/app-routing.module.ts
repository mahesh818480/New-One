import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { GuardGuard } from './guard.guard';
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailsComponent } from './house-details/house-details.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signin',component:SigninComponent,},
  {path:'',component:HomeComponent},
  {path:'product',component:ProductsComponent ,canActivate: [GuardGuard],
  canActivateChild : [GuardGuard],},
  {path:'contact',component:ContactsComponent},
  {path:'House',component:HousesComponent},
  // {path:'House',component:HousesComponent,canActivate:[GuardGuard]},
  // {path:'House-Details',component:HouseDetailsComponent,canActivate:[GuardGuard]},
  {path:'House-Details/:products',component:HouseDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
