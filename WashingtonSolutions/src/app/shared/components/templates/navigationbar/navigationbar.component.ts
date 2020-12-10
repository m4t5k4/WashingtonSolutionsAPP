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

  navUser = [
    { link: '/', title: 'Mijn wedstrijden' },
    { link: '/', title: 'Mijn ploeg' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' }
  ]
  navCaptain = [
    { link: '/', title: 'Mijn ploeg' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' }
  ]
  navAdmin = [
    { link: '/admin/list', title: 'Gebruikers' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' },
    { link: '/', title: 'link' }
  ]

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
