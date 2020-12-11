import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { TournamentComponent } from './tournament/tournament.component';
import { SharedModule } from '../../../shared/shared.module';
import { NewTournamentComponent } from './new-tournament/new-tournament.component';
import { EditTournamentComponent } from './edit-tournament/edit-tournament.component';



@NgModule({
  declarations: [TournamentComponent, NewTournamentComponent, EditTournamentComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TournamentModule { }
