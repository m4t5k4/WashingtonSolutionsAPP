import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { Error403Component } from './shared/components/error/error403/error403.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { LoginComponent } from './modules/home/login/login.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error403Component,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
