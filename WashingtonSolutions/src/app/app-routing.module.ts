import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { LoginComponent } from './modules/home/login/login.component';
import { ManageCompetitionComponent } from './modules/admin/competition/manage-competition/manage-competition.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { ListComponent } from './modules/admin/user/list/list.component';
import { DetailComponent } from './modules/admin/user/detail/detail.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'competition', component: ManageCompetitionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin/list', component: ListComponent},
  { path: 'admin/edit/:id', component: DetailComponent},
  { path: 'admin/add', component: DetailComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
