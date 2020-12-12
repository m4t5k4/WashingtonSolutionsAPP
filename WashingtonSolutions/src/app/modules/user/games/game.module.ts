import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { UserGameDetailComponent } from './details/user-game-detail/user-game-detail.component';


@NgModule({
  declarations: [GameComponent, UserGameDetailComponent],
  imports: [
    CommonModule
  ]
})
export class UserGameModule { }
