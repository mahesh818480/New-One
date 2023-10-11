import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'
import { ProductsComponent } from './products/products.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GuardGuard } from './guard.guard';
import { AlertyfyService } from './services/alertyfy.service';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { LoaderComponent } from './loader/loader.component';
import { HousesComponent } from './houses/houses.component';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { ModalPopupComponent } from './modal-popup/modal-popup.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    ProductsComponent,
    ContactsComponent,
    HomeComponent,
    LoaderComponent,
    HousesComponent,
    HouseDetailsComponent,
    ModalPopupComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
  ],
  providers: [GuardGuard,AuthService,AlertyfyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
