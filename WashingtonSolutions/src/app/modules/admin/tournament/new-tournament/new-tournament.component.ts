import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TournamentService } from 'src/app/core/services/tournament.service'
import { CompetitionService } from 'src/app/core/services/competition.service'
import { Tournament } from 'src/app/shared/models/tournament.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';
import { Competition } from '../../../../shared/models/competition.model';
import { Observable, throwError } from 'rxjs';
import { NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { catchError } from 'rxjs/operators';

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
  model = new Tournament(0, "", null, null, null)
  //variabellen voor edit
  isEdit = false;
  startDisabled = false;
  endDisabled = false;


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
    var url = this.route.snapshot.paramMap.get("id");
    console.log(url)
    if (url) {
      var id = Number(url)
      this._tournamentService.getTournament(id)
        .pipe(
          catchError(err => {
            this.router.navigateByUrl("/tournament");
            return throwError(err);
            //stuurt mensen terug als hettournooi niet bestaad.
          })
        )
        .subscribe(result => {
        if (result.tournamentID) {
          this.isEdit = true;
          this.model = result;
          var x = result.startDate.split("-", 3);
          var y = result.endDate.split("-", 3)
          this.startdate = x[0] + "-" + x[1] + "-" + x[2].substr(0, 1); //bug: wordt niet ingevuld in de input
          this.enddate = y[0] + "-" + y[1] + "-" + y[2].substr(0, 1)
          //als de start/einddatum al voorbij is kan de startdatum niet meer aangepast worden.
          console.log(this.parseDate(result.startDate)) //nog aanpassen in model
          console.log(this.today.getTime())

          if (this.parseDate(result.startDate).getTime() < this.today.getTime()) {
            console.log("start")
            this.startDisabled = true;
          }
          if (this.parseDate(result.endDate).getTime() < this.today.getTime()) {
            console.log("end")
            this.endDisabled = true;
          }
        }
      })
    }
    
  }

  parseDate(date: string) {
    var x = date.split("-", 3)
    console.log(x)
    return new Date(Number(x[0]), Number(x[1]), Number(x[2].substr(0, 1)));
  }

  getCompetitions() {
    this._competitionService.getCompetitions().subscribe(result => {
      this.competitions = result
      console.log(result)
    })
  }

  convertDate(date: NgbDate): Date {
    let x = this.ngbDateParserFormatter.format(date);
    console.log(x)
    return new Date(x);
  }

  onSubmit() {
    this.submitted = true;


    // reset alerts on submit
    this.alertService.clear();
    this.loading = true;

    //convert dates
    this.model.startdate = this.convertDate(this.startdate);
    this.model.enddate = this.convertDate(this.enddate);
    this.model.competitionID = Number(this.model.competitionID) //er is waarschijnlijk een betere manier om dit te doen.

    //validate form
    //automatische validatie lukte niet dus tijdelijk zo.
    if (!this.model.name) {
      console.log("naam mag niet leeg zijn.")
      this.loading = false;
      return;
    }

    if (!this.model.competitionID) {
      console.log("selecteer een competitie")
      this.loading = false;
      return;
    }

    if (!this.model.startdate) {
      console.log("selecteer een startdatum")
      this.loading = false;
      return;
    }

    if (!this.model.enddate) {
      console.log("selecteer een einddatum")
      this.loading = false;
      return;
    }

    if (this.model.startdate >= this.model.enddate) {
      console.log("startdate moet kleiner zijn dan enddate")
      this.loading = false;
      return;
    }

    
    if (this.model.startdate < this.today && !this.isEdit) {
      console.log("startdate mag niet voor vandaag zijn.")
      this.loading = false;
      return;
    }
    // stop here if form is invalid

    console.log(this.model.name)
    console.log(this.model.startdate)
    console.log(this.model.enddate)
    console.log(this.model.competitionID)

    console.log(this.model)
    if (this.isEdit) {
      this._tournamentService.editTournament(this.model)
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
    } else {
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



}


