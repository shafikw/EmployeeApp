import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){

    this.http.get("https://localhost:44352/api/user").subscribe({
      next: (response) =>this.users=response,
      error: (e) => console.error(e)
  });

  }
  
}
