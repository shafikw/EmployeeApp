import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements  OnInit {

  jwtHelper = new JwtHelperService();

  constructor(private userService:UserService){}

  ngOnInit(): void {
   const token= localStorage.getItem('token');

   if(token){
     this.userService.decodedToken=this.jwtHelper.decodeToken(token);
   }

  }

}
