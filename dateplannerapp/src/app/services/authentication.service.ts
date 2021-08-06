import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User;

  constructor(private userService: UserService) { }

  public authenticate(email: string, password: string){
    this.userService.getUser(email).subscribe((response: User) => {
        this.user = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    if (this.user != null && password === this.user.password) {
      //sessionStorage.setItem('email', email);
      localStorage.setItem('email', email);
      return true;
    } else {
      return false;
    }
  }

  public isUserLoggedIn() {
    //let email = sessionStorage.getItem('email');
    let email = localStorage.getItem('email');
    console.log(email);
    console.log(localStorage);
    console.log(!(email === null));
    return !(email === null);
  }

  public logOut() {
    //sessionStorage.removeItem('email');
    localStorage.removeItem('email');
  }
}
