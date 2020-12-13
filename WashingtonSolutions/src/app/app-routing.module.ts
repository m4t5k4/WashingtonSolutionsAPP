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
import { CaptainComponent } from './modules/captain/captain/captain.component';
import { GameComponent } from './modules/user/games/game.component';
import { UserGameDetailComponent } from './modules/user/games/details/user-game-detail/user-game-detail.component';
import { ChallengesComponent } from './modules/user/games/challenges/challenges.component';
import { NewChallengeComponent } from './modules/user/games/new-challenge/new-challenge.component';



const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  
  { path: 'register', component: RegisterComponent },
  { path: 'captain', component: CaptainComponent },

  
  { path: 'admin/user/list', component: UserListComponent },
  { path: 'admin/user/edit/:id', component: UserDetailComponent },
  { path: 'admin/user/add', component: UserDetailComponent },
  
  { path: 'admin/competition', component: ManageCompetitionComponent},
  { path: 'admin/competition/add', component: AddCompetitionComponent},
  { path: 'admin/competition/edit/:id', component: EditCompetitionComponent},

  { path: 'admin/game/list', component: GameListComponent },
  { path: 'admin/game/edit/:id', component: GameDetailComponent },
  { path: 'admin/game/add', component: GameDetailComponent },

  { path: 'user/profile/edit', component: ProfileEditComponent },
  { path: 'user/games' , component: GameComponent},
  { path: 'user/games/edit/:id', component: UserGameDetailComponent },
  { path: 'user/challenge', component: ChallengesComponent },
  { path: 'user/challenge/new', component: NewChallengeComponent },
  
  { path: 'table', component: TableComponent },
  { path: 'table/add', component: NewTableComponent },
  { path: 'table/:id', component: EditTableComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: 'tournament/add', component: NewTournamentComponent },
  { path: 'tournament/:id', component: NewTournamentComponent },
  //TODO: childrenroutes

  { path: 'group', component: GroupComponent },

  //moet laatst blijven staan.
  { path: '**', component: Error404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
