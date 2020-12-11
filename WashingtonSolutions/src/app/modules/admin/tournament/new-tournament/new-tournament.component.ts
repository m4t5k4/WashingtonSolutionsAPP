import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentService } from 'src/app/core/services/tournament.service'
import { Tournament } from 'src/app/shared/models/tournament.model'
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../../../../core/services/alert.service';

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.scss']
})
export class NewTournamentComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private _tournamentService: TournamentService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    var t = new Tournament(0, this.f.name.value, new Date(), new Date(),1)
    
    console.log(t)
    this._tournamentService.addTournament(t)
      .subscribe({
        next: () => {
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl("/table");
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });

  }

}
