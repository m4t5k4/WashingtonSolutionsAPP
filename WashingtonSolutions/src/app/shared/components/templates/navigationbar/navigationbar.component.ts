import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/core/services/file.service';
import { AccountService } from '../../../../core/services/account.service';
import { User } from '../../../models/user.model';
import { environment } from '../../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  user: User;
  imageUrl: string;

  navUser = [
    { link: '/user/games', title: 'My games' },
    { link: '/', title: 'My group' },
    { link: '/user/profile/edit', title: 'My profile' }
  ]
  navCaptain = [
    { link: '/', title: 'My group' }
  ]
  navAdmin = [
    { link: '/admin/user/list', title: 'Users' },
    { link: '/admin/game/list', title: 'Games' },
    { link: '/admin/table', title: 'Tables' },
    { link: '/group', title: 'Groups' },
    { link: '/admin/competition', title: 'Competitions' },
    { link: '/tournament', title: 'Tournaments' }
  ]

  constructor(
    public accountService: AccountService,
    private fileService: FileService
  ) {
    this.accountService.user.subscribe(x => {
      this.user = x;
      this.fileService.getFile(x.userPictureID)
        .subscribe(x => this.imageUrl = environment.apiUrl.slice(0,-3) + x.path);
    });
   }

  ngOnInit(): void {
  }

  logout () {
    this.accountService.logout();
  }

}
