import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(
    public userService: UserService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    localStorage.removeItem('token');
  }

  login() {
    this.userService.login(this.model).subscribe({
      next: (response) => {
        this.alertify.success('Logged in successfully');
      },
      error: (e) => {
        this.alertify.error(e);
      },
      complete: () => {
        this.router.navigate(['/home']);
      }
    });
  }
}
