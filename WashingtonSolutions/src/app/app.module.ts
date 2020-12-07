import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { Error403Component } from './shared/components/error/error403/error403.component';
import { FooterComponent } from './shared/components/templates/footer/footer.component';
import { NavigationbarComponent } from './shared/components/templates/navigationbar/navigationbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error403Component,
    FooterComponent,
    NavigationbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
