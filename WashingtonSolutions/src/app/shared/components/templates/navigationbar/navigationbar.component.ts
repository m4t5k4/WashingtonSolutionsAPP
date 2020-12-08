import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../core/services/account.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  user: User;
  constructor(
    private accountService: AccountService
  ) {
    this.accountService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
  }

  logout () {
    this.accountService.logout();
  }

}
