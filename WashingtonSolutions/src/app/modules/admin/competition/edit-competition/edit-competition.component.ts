import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompetitionService } from 'src/app/core/services/competition.service';
import { Competition } from 'src/app/shared/models/competition.model';
import { GameType } from 'src/app/shared/models/game-type.model';

@Component({
  selector: 'app-edit-competition',
  templateUrl: './edit-competition.component.html',
  styleUrls: ['./edit-competition.component.scss']
})
export class EditCompetitionComponent implements OnInit {

  gameTypes: GameType[];
  competitionID = Number(this.route.snapshot.paramMap.get("id"));
  competition: Competition;

  constructor(private _competitionService: CompetitionService, private router: Router, private route: ActivatedRoute,) { 
    // subscribe to GET competition/{id}
    this._competitionService.getCompetitionById(this.competitionID).subscribe(
      result => {
        this.competition = result;
      }
    )

    // subscribe to GET gameTypes
    this._competitionService.getGameTypes().subscribe(
      result => {
        this.gameTypes = result;
      }
    )
  }

  ngOnInit(): void {
  }
  
  editCompetition() {
    var gameTypeID: number = + this.competition.gameTypeID;
    var c = new Competition(this.competitionID, this.competition.name, gameTypeID, null);

    this._competitionService.putCompetition(this.competitionID, c).subscribe({
      next: () => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl('/competitions');
      },
      error: error => {
        console.log(error);
        console.log(c);
      }
    });
  }
}
