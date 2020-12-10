import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { LoginComponent } from './modules/home/login/login.component';
import { ManageCompetitionComponent } from './modules/admin/competition/manage-competition/manage-competition.component';
import { AddCompetitionComponent } from './modules/admin/competition/add-competition/add-competition.component';
import { EditCompetitionComponent } from './modules/admin/competition/edit-competition/edit-competition.component';
import { RegisterComponent } from './modules/home/register/register.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'competitions', component: ManageCompetitionComponent},
  { path: 'add-competition', component: AddCompetitionComponent},
  { path: 'edit-competition/:id', component: EditCompetitionComponent},
  { path: 'register', component: RegisterComponent},
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
