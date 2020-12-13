import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public accountService: AccountService
  ) { }

  canActivate(){
    if (this.accountService.isAdmin()) return true;

    this.router.navigate(["/no-access"]);
    return false;
  }
}
