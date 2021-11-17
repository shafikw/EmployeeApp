import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.userService.register(this.model).subscribe({
      next: (response) => {
        this.alertify.success('Registration successfull');
      },
      error: (e) => {
        this.alertify.error(e);
      },
    });
  }  
}
