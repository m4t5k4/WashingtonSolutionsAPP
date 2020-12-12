import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../../../core/services/account.service';
import { AlertService } from '../../../core/services/alert.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-captain',
  templateUrl: './captain.component.html',
  styleUrls: ['./captain.component.scss']
})
export class CaptainComponent implements OnInit {

  users = null;
  user: User;
  constructor(
    private accountService: AccountService,
    private alertService: AlertService
  ) {
    this.accountService.user.subscribe(x => this.user = x);}

  ngOnInit(): void {
    console.log(this.user.groupID)
    this.accountService.getByGroupId(this.user.groupID)
      .pipe(first())
      .subscribe(users => this.users = users);

    this.accountService.getByGroupId(this.user.groupID)
      .pipe(first())
      .subscribe(users => console.log(users));
  }

  kickUser(id: number) {
    const user = this.users.find(x => x.userID === id);
    user.isKicking = true;
    this.accountService.kick(user)
      .pipe(first())
      .subscribe(() => {
        this.alertService.success('Gebruiker succesvol gekicked');
        //refresh list
      });
  }

}
