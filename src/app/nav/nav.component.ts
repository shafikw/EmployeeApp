import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.model).subscribe({
      next: (response) => {
        this.alertify.success('Logged in successfully');
      },
      error: (e) => {
        this.alertify.error(e);
      },
    });
  }

  loggedIn() {
   return this.userService.loggedIn();
  }

  loggedOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
