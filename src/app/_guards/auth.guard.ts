import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router,
    private alertifyService: AlertifyService
  ) {}

  canActivate(): boolean {

    if(this.userService.loggedIn()){
      return true;
    }
    
    this.alertifyService.error('You shall not pass!!!');
    this.router.navigate(['/login']);

    return false;
  }
}
