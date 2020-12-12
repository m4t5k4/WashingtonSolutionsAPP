import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../../../core/services/account.service';
import { AlertService } from '../../../core/services/alert.service';
import { User } from '../../../shared/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-captain',
  templateUrl: './captain.component.html',
  styleUrls: ['./captain.component.scss']
})
export class CaptainComponent implements OnInit {

  form: FormGroup;
  users = null;
  user: User;
  loading = false;
  noGroupUsers: User[];
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private alertService: AlertService,
  ) {
    this.accountService.user.subscribe(x => this.user = x);}

  ngOnInit(): void {
    console.log(this.user.groupID)
    this.getUsers()


    this.form = this.formBuilder.group({
      userID: ['', Validators.required]
    });
  }

  kickUser(id: number) {
    const user = this.users.find(x => x.userID === id);
    user.isKicking = true;
    this.accountService.kick(user)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Gebruiker succesvol gekicked');
        //refresh list
        this.getUsers()
      });
    this.loading = false;
  }

  getUsers() {
    //lijst met gebruikers in groep
    this.accountService.getByGroupId(this.user.groupID)
      .pipe(first())
      .subscribe(users => this.users = users);
    //lijst met gebruikers zonder groep... Of toch niet!
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => {
        this.noGroupUsers = users
        console.log(users)
      }
        )
  }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.form.value.userID)

    this.accountService.getById(this.form.value.userID).subscribe(result => {

      //werkte vreemd genoeg niet anders
      this.accountService.addToGroup(result, this.user.groupID)
        .pipe(first())
        .subscribe(() => {
          this.alertService.success('Gebruiker succesvol toegevoegd');
          //refresh list
          this.getUsers()
        });
      this.loading = false;

    })
  }

}
