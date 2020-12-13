import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/core/services/file.service';
import { AccountService } from '../../../../core/services/account.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  user: User;
  imageUrl: string;

  navUser = [
    { link: '/user/games', title: 'Mijn wedstrijden' },
    { link: '/', title: 'Mijn ploeg' },
    { link: '/user/profile/edit', title: 'Mijn gebruiker' },
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
    { link: '/admin/user/list', title: 'Gebruikers' },
    { link: '/admin/game/list', title: 'Wedstrijden' },
    { link: '/table', title: 'Tafels' },
    { link: '/group', title: 'Ploegen' },
    { link: '/admin/competition', title: 'Competities' },
    { link: '/tournament', title: 'Toernooien' }
  ]

  constructor(
    private accountService: AccountService,
    private fileService: FileService
  ) {
    this.accountService.user.subscribe(x => {
      this.user = x;
      this.fileService.getFile(x.userPictureID)
        .subscribe(x => this.imageUrl = 'https://kickerapi.azurewebsites.net/' + x.path);
    });
   }

  ngOnInit(): void {
  }

  logout () {
    this.accountService.logout();
  }

}
