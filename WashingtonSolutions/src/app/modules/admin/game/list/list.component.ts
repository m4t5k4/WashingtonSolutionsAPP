import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { GameService } from 'src/app/core/services/game.service';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  games = null;
  constructor(
    private gameService: GameService,
    private alertService: AlertService
    ) { }

  ngOnInit (): void {
    this.gameService.getGames()
      .pipe(first())
      .subscribe(games => this.games = games);
  }

  deleteGame (id: number) {
    const game = this.games.find(x => x.gameID === id);
    console.log(game);
    game.isDeleting = true;
    this.gameService.deleteGame(id)
      .pipe(first())
      .subscribe(() => {
        this.games = this.games.filter(x => x.gameID !== id);
        this.alertService.success('Wedstrijd succesvol verwijderd');
      });
  }

}
