import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competition } from 'src/app/shared/models/competition.model';
import { CompetitionService } from '../../../../core/services/competition.service';

@Component({
  selector: 'app-manage-competition',
  templateUrl: './manage-competition.component.html',
  styleUrls: ['./manage-competition.component.scss']
})
export class ManageCompetitionComponent implements OnInit {

  competitions: Competition[];

  constructor(private _competitionService: CompetitionService, private router: Router, private route: ActivatedRoute) {
    this.getCompetitions()
  }

  ngOnInit(): void {
  }

  getCompetitions() {
    // subscribe to GET competitions
    this._competitionService.getCompetitions().subscribe(
      result => {
        this.competitions = result;
      }
    )
  }

  deleteCompetition(id) {
    var competitionID: number = + id;
    // subscribe to DELETE competitions
    this._competitionService.deleteCompetition(competitionID).subscribe({
      next: () => {
        this.getCompetitions()
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl('/competitions');
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
