import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import { AlertService } from '../../../core/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)],],
      email: ['', Validators.required],
      birthday: ['', Validators.required]
    });
  }

  get f () { return this.form.controls; }

  onSubmit () {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    let values = this.form.value;
    var newUser = {
      roleID : 2,
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthday: values.birthday, //string->DateTime
      //token: null, //mag weg
      //userPicture: null, //mag weg
      //userID: null, //mag weg
      //groupID: null //moet nullable
    }

    console.log(newUser);

    this.accountService.register(newUser)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Gebruiker succesvol aangemaakt', { keepAfterRouteChange: true });
          this.router.navigate(['/login'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
