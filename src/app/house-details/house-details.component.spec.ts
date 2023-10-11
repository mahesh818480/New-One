import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDetailsComponent } from './house-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

describe('HouseDetailsComponent', () => {
  let component: HouseDetailsComponent;
  let fixture: ComponentFixture<HouseDetailsComponent>;
  let service: jasmine.SpyObj<CommonService>;
  let mockRoute:jasmine.SpyObj<Router>;
  let mockActiveRouter:jasmine.SpyObj<ActivatedRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseDetailsComponent ],
      schemas:[NO_ERRORS_SCHEMA],
      imports:[HttpClientTestingModule,RouterTestingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = jasmine.createSpyObj('CommonService',['getJsonData']);
    service.getJsonData.and.returnValue({} as any)

    component = new HouseDetailsComponent(
      service,
      mockActiveRouter,
      mockRoute,
    )
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be called ngOnInit',() =>{
    component.ngOnInit();
    service.getJsonData.and.returnValue([] as any)
  })
});
