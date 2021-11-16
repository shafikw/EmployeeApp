import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private userService: UserService) {}

  ngOnInit() {}

  login() {
    this.userService.login(this.model).subscribe({
      next: (response) =>{
        console.log("Logged in successfully");
      },
      error: (e) =>{
        console.log(e);
      }
  })
  }

  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }

  loggedOut(){
    localStorage.removeItem('token');
    console.log('Logged out');
  }
}
