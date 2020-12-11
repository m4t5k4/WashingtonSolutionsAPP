import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '../../../../core/services/alert.service';
import { AccountService } from '../../../../core/services/account.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

interface Option {
    value: number;
    viewValue: string;
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  form: FormGroup;
  id: number;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  roles: Option[] = [
    { value: 1, viewValue: 'admin' },
    { value: 2, viewValue: 'gebruiker'},
    { value: 3, viewValue: 'kapitein' }
  ] 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private alertService: AlertService,
    private ngbDateParserFormatter: NgbDateParserFormatter
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.params['id']);//parse
    this.isAddMode = !this.id;

    // password not required in edit mode
    const passwordValidators = [Validators.minLength(1)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', passwordValidators],
      email: ['', Validators.required],
      roleID: [2],
      birthday: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.accountService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }
  }

  get f () { return this.form.controls; }

  get imageUrl () {
    let fileName = 'Morty_Smith.jpg'
    return 'https://kickerapi.azurewebsites.net/uploads/' + fileName;
  }

  onSubmit () {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser () {
    let values = this.form.value;
    var newUser = {
      roleID: parseInt(values.roleID),
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      birthday: values.birthday
    }
    this.accountService.register(newUser)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Gebruiker succesvol toegevoegd', { keepAfterRouteChange: true });
          this.router.navigate(['../list'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateUser () {
    console.log(this.form.value.roleID);
    let values = this.form.value;
    let ngbDate = values.birthday;
    let date = this.ngbDateParserFormatter.format(ngbDate);
    console.log(date);
    var updateUser = {
      roleID: parseInt(values.roleID),
      username: values.username,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      userID: this.id,
      birthday: date,
      userPictureID: 1
    }
    this.accountService.update(this.id, updateUser)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update succesvol', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: error => {
          this.alertService.error(error);
          this.loading = false;
          console.log(updateUser);
        }
      });
  }

  goBack() {
    this.router.navigateByUrl("/admin/user/list")
  }

}
