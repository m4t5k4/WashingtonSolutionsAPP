import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { Error403Component } from './shared/components/error/error403/error403.component';

import { FooterComponent } from './shared/components/templates/footer/footer.component';
import { NavigationbarComponent } from './shared/components/templates/navigationbar/navigationbar.component';

import { AlertComponent } from './shared/components/alert/alert.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { CompetitionModule } from './modules/admin/competition/competition.module';
import { HomeModule } from './modules/home/home.module';
import { UserModule } from './modules/admin/user/user.module';

import { TableModule } from './modules/admin/table/table.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GameModule } from './modules/admin/game/game.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error403Component,

    FooterComponent,
    NavigationbarComponent,

    AlertComponent

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    TableModule,
    NgbModule,
    CompetitionModule,
    HomeModule,
    UserModule,
    GameModule
  ],
  exports: [
    SharedModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
