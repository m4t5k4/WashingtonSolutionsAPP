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
import { ListComponent as UserListComponent } from './modules/admin/user/list/list.component';
import { DetailComponent as UserDetailComponent } from './modules/admin/user/detail/detail.component';
import { ListComponent as GameListComponent } from './modules/admin/game/list/list.component';
import { GroupComponent } from './modules/admin/group/group.component';
import { EditComponent as ProfileEditComponent } from './modules/user/profile/edit/edit.component';
import { DetailComponent as GameDetailComponent } from './modules/admin/game/detail/detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent},
  
  { path: 'register', component: RegisterComponent},
  
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

  { path: 'table', component: TableComponent },
  { path: 'addtable', component: NewTableComponent },
  { path: 'table/:id', component: EditTableComponent },
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
