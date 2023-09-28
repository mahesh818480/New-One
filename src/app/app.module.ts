import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    ModalPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [GuardGuard,AuthService,AlertyfyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
