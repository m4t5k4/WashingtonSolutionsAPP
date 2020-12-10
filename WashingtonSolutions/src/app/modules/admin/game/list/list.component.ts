import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { GameService } from 'src/app/core/services/game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  games = null;
  constructor(private gameService: GameService) { }

  ngOnInit (): void {
    this.gameService.getAll()
      .pipe(first())
      .subscribe(games => this.games = games);
  }

  deleteGame (id: number) {
    const game = this.games.find(x => x.id === id);
    game.isDeleting = true;
    this.gameService.delete(id)
      .pipe(first())
      .subscribe(() => this.games = this.games.filter(x => x.id !== id));
  }

}
