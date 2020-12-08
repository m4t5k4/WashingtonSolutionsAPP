import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { LoginComponent } from './modules/home/login/login.component';
import { TableComponent } from './modules/admin/table/table/table.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: Error404Component },
  //TODO: childrenroutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
