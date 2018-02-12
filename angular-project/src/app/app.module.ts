import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { StartPageComponent } from './start-page/start-page.component';
import { Page404Component } from './page404/page404.component';
import { ImprintComponent } from './imprint/imprint.component';
import {RouterModule} from "@angular/router";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import {CustomerService} from "./customer.service";
import {HttpClientModule} from "@angular/common/http";
import { CustomerNewComponent } from './customer-new/customer-new.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing/app-routing.module';

// Decorator
@NgModule({
  // View Classes
  declarations: [
    AppComponent,
    CustomerListComponent,
    StartPageComponent,
    Page404Component,
    ImprintComponent,
    CustomerDetailComponent,
    CustomerNewComponent
  ],
  imports: [
    // Module
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    // Services
    CustomerService
  ],
  bootstrap: [AppComponent]
}) export class AppModule { }
