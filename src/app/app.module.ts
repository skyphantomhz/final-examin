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
import {ShoesItemComponent} from './shoes-item/shoes-item';
import {SliderComponent} from './slider/slider';

@NgModule({
  declarations: [
    AppComponent,
    BodyIndexComponent,
    IntroductionComponent,

    BodyDetailComponent,
    NavbarHeadComponent,
    UnderNavbarHeadComponent,
    AdminPageComponent,
    ShoesItemComponent,
    SliderComponent,
    
  ],
  imports     : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [MockBackend, BaseRequestOptions, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent ]
})
export class AppModule {
}
