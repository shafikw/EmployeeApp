import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl = 'https://localhost:44352/api/';
  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'user/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  register(model: any){
   return this.http.post(this.baseUrl+'user/register',model);
  }

}
