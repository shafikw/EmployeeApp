import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  constructor(private userService: UserService) {}

  ngOnInit() {}

  register() {
    this.userService.register(this.model).subscribe({
      next: (response) => {
        console.log('Registration successfull');
      },
      error: (e) => {
        console.error(e);
      },
    });
  } 
}
