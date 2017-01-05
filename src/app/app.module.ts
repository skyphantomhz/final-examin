import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import{BodyIndexComponent} from './body-index/body-index';
import{IntroductionComponent} from './introduction/introduction';

import {BodyDetailComponent} from './body-detail/body-detail';
import {NavbarHeadComponent} from './navbar-head/navbar-head';
import {AdminPageComponent} from './admin-page/admin-page';
import {UnderNavbarHeadComponent} from './under-navbar-head/under-navbar-head';
import {ProductItemComponent} from './product-item/product-item';
import {SliderComponent} from './slider/slider';
import {LoginComponent} from './login/login';
import {InsertProductComponent} from './admin-insert-product/insert-product';
import { CategoryService } from './_service/category.service';

import {ShowProduct} from './admin-show-product/show-product';
import {ProductService} from './_service/product.service';
import {NavbarLeft} from './admin-navbar-left/navbar-left';


@NgModule({
  declarations: [
    AppComponent,
    BodyIndexComponent,
    IntroductionComponent,
    InsertProductComponent,
    BodyDetailComponent,
    NavbarHeadComponent,
    UnderNavbarHeadComponent,
    AdminPageComponent,
    ProductItemComponent,
    SliderComponent,
    LoginComponent,
    ShowProduct,
    NavbarLeft
    
    
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [CategoryService,ProductService,MockBackend, BaseRequestOptions, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent ]
})
export class AppModule {
}
