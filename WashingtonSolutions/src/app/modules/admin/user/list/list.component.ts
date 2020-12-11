import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AccountService } from '../../../../core/services/account.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  users = null;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
    
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => console.log(users));
  }

  deleteUser (id: number) {
    const user = this.users.find(x => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter(x => x.id !== id));
  }

}
