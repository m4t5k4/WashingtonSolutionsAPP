import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './modules/home/homepage/homepage.component';
import { Error404Component } from './shared/components/error/error404/error404.component';
import { LoginComponent } from './modules/home/login/login.component';
import { TableComponent } from './modules/admin/table/table/table.component';
import { NewTableComponent } from './modules/admin/table/new-table/new-table.component';
import { EditTableComponent } from './modules/admin/table/edit-table/edit-table.component';
import { ManageCompetitionComponent } from './modules/admin/competition/manage-competition/manage-competition.component';
import { AddCompetitionComponent } from './modules/admin/competition/add-competition/add-competition.component';
import { EditCompetitionComponent } from './modules/admin/competition/edit-competition/edit-competition.component';
import { RegisterComponent } from './modules/home/register/register.component';
//import { ListComponent } from './modules/admin/user/list/list.component';
//import { DetailComponent } from './modules/admin/user/detail/detail.component';
// (in comment gezet bij merge Bram)
import { TournamentComponent } from './modules/admin/tournament/tournament/tournament.component';
import { NewTournamentComponent } from './modules/admin/tournament/new-tournament/new-tournament.component';
import { ListComponent as UserListComponent } from './modules/admin/user/list/list.component';
import { DetailComponent as UserDetailComponent } from './modules/admin/user/detail/detail.component';
import { ListComponent as GameListComponent } from './modules/admin/game/list/list.component';
import { GroupComponent } from './modules/admin/group/group.component';
import { EditComponent as ProfileEditComponent } from './modules/user/profile/edit/edit.component';
import { DetailComponent as GameDetailComponent } from './modules/admin/game/detail/detail.component';
import { ShowScoreComponent } from './modules/user/show-score/show-score.component';
import { CreateTeamComponent } from './modules/user/create-team/create-team.component';
import { NoAccessComponent } from './shared/components/no-access/no-access.component';
import { AuthGuard } from './core/guards/auth-guard.service';
import { UserAuthGuard } from './core/guards/user-auth-guard.service';
import { AdminAuthGuard } from './core/guards/admin-auth-guard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  
  { path: 'register', component: RegisterComponent},
  
  { path: 'admin/user/list', component: UserListComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/user/edit/:id', component: UserDetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/user/add', component: UserDetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  
  { path: 'admin/competition', component: ManageCompetitionComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: 'admin/competition/add', component: AddCompetitionComponent, canActivate: [AuthGuard, AdminAuthGuard]},
  { path: 'admin/competition/edit/:id', component: EditCompetitionComponent, canActivate: [AuthGuard, AdminAuthGuard]},

  { path: 'admin/game/list', component: GameListComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/game/edit/:id', component: GameDetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'admin/game/add', component: GameDetailComponent, canActivate: [AuthGuard, AdminAuthGuard] },

  { path: 'user/profile/edit',
    component: ProfileEditComponent,
    canActivate: [AuthGuard, UserAuthGuard]},

  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'table/add', component: NewTableComponent, canActivate: [AuthGuard] },
  { path: 'table/:id', component: EditTableComponent, canActivate: [AuthGuard] },
  { path: 'tournament', component: TournamentComponent, canActivate: [AuthGuard] },
  { path: 'tournament/add', component: NewTournamentComponent, canActivate: [AuthGuard] },
  { path: 'tournament/:id', component: NewTournamentComponent, canActivate: [AuthGuard] },
  //TODO: childrenroutes

  { path: 'group', component: GroupComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'user/show_score', component: ShowScoreComponent, canActivate: [AuthGuard] },
  { path: 'user/create_team', component: CreateTeamComponent, canActivate: [AuthGuard] },
  { path: 'no-access', component: NoAccessComponent },

  //moet laatst blijven staan.
  { path: '**', component: Error404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
