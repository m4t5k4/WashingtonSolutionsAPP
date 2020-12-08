import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { Error403Component } from './shared/components/error/error403/error403.component';

import { FooterComponent } from './shared/components/templates/footer/footer.component';
import { NavigationbarComponent } from './shared/components/templates/navigationbar/navigationbar.component';

import { AlertComponent } from './shared/components/alert/alert.component';
import { LoginComponent } from './modules/home/login/login.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { GroupComponent } from './modules/admin/group/group.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error403Component,

    FooterComponent,
    NavigationbarComponent,

    AlertComponent,
    LoginComponent,
    GroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
