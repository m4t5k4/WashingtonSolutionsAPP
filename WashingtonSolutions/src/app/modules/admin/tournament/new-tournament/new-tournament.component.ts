import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentService } from 'src/app/core/services/tournament.service'
import { CompetitionService } from 'src/app/core/services/competition.service'
import { Tournament } from 'src/app/shared/models/tournament.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';
import { Competition } from '../../../../shared/models/competition.model';
import { Observable } from 'rxjs';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  today = new Date();
  competitions: Competition[];
  startdate;
  enddate;
  model = new Tournament(0, "", new Date(), new Date(),null)
  

  constructor(
    private _tournamentService: TournamentService,
    private _competitionService: CompetitionService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private ngbDateParserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {

    this.getCompetitions()

  }

  getCompetitions() {
    this._competitionService.getCompetitions().subscribe(result => {
      this.competitions = result
      console.log(result)
    })
  }

  convertDate(date: NgbDate): Date{
    let x = this.ngbDateParserFormatter.format(date);
    console.log(x)
    return new Date(x);
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    //convert dates
    this.model.startdate = this.convertDate(this.startdate);
    this.model.enddate = this.convertDate(this.enddate);
    this.model.competitionID = Number(this.model.competitionID) //er is waarschijnlijk een betere manier om dit te doen.

    // stop here if form is invalid

    console.log(this.model.name)
    console.log(this.model.startdate)
    console.log(this.model.enddate)
    console.log(this.model.competitionID)



    this.loading = true;
    
    console.log(this.model)
    this._tournamentService.addTournament(this.model)
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl("/tournament");
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });

  }

  

}
