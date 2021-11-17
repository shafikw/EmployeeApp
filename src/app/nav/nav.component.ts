import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
  }

  loggedIn() {
    return this.userService.loggedIn();
   }
  
  loggedOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.alertify.message('Logged out');
  }
}
