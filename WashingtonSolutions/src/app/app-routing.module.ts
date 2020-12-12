import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { LoginComponent } from './modules/home/login/login.component';
import { TableComponent } from './modules/admin/table/table/table.component';
import { NewTableComponent } from './modules/admin/table/new-table/new-table.component';
import { EditTableComponent } from './modules/admin/table/edit-table/edit-table.component';
import { ManageCompetitionComponent } from './modules/admin/competition/manage-competition/manage-competition.component';
import { RegisterComponent } from './modules/home/register/register.component';
import { ListComponent } from './modules/admin/user/list/list.component';
import { DetailComponent } from './modules/admin/user/detail/detail.component';
import { TournamentComponent } from './modules/admin/tournament/tournament/tournament.component';
import { NewTournamentComponent } from './modules/admin/tournament/new-tournament/new-tournament.component';
import { EditTournamentComponent } from './modules/admin/tournament/edit-tournament/edit-tournament.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  { path: 'competition', component: ManageCompetitionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'admin/list', component: ListComponent},
  { path: 'admin/edit/:id', component: DetailComponent},
  { path: 'admin/add', component: DetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'table/add', component: NewTableComponent },
  { path: 'table/:id', component: EditTableComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'tournament/add', component: NewTournamentComponent },
  { path: 'tournament/:id', component: NewTournamentComponent },
  //TODO: childrenroutes


  //moet laatst blijven staan.
  { path: '**', component: Error404Component },
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
