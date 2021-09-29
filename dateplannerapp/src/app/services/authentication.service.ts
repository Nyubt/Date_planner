import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';
import { filter, flatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user: User;

  constructor(private userService: UserService) { }

  public authenticate(email: string, password: string): Observable<boolean> {
    return this.userService.getUser(email)
      .pipe(
        flatMap((response: User) => {
          this.user = response;
          if (this.user != null && password === this.user.password) {
            //sessionStorage.setItem('email', email);
            localStorage.setItem('email', email);
            return of(true);
          } else {
            //return of(false);
            return throwError("Incorrect email or password");
          }
        //console.log(response);
      })
    );
  }

  public isUserLoggedIn() {
    //let email = sessionStorage.getItem('email');
    let email = localStorage.getItem('email');
    //console.log(email);
    //console.log(localStorage);
    //console.log(!(email === null));
    return !(email === null);
  }

  public logOut() {
    //sessionStorage.removeItem('email');
    localStorage.removeItem('email');
  }
}
