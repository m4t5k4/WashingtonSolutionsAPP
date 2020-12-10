import { Component, OnInit } from '@angular/core';
import { Competition } from 'src/app/shared/models/competition.model';
import { CompetitionService } from '../../../../core/services/competition.service';

@Component({
  selector: 'app-manage-competition',
  templateUrl: './manage-competition.component.html',
  styleUrls: ['./manage-competition.component.scss']
})
export class ManageCompetitionComponent implements OnInit {

  competitions: Competition[];

  constructor(private _competitionService: CompetitionService) { 
    // subscribe to GET competitions
    this._competitionService.getCompetitions().subscribe(
      result => {
        this.competitions = result;
      }
    )
  }

  ngOnInit(): void {
  }

}
