import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';
import { filter, flatMap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private userService: UserService) { }

  /*public register(email: string, password: string, name: string, imageUrl: string) {
    let user = this.getRegistration(email,password, name, imageUrl);
    user.subscribe((response: User) => {
      console.log(response);
      if (response == null){
        console.log("fail");
      } else {
        console.log("success");
      }
      return response;
    },
    (error: HttpErrorResponse) => {
     alert(error.message);
    }
    );
     console.log("chestii", user);
  }*/

  public register(email: string, password: string, name: string, imageUrl: string): Observable<User> {
    console.log("Inside register");
    return this.userService.getUser(email)
      .pipe(catchError(() => {
        console.log("Inside catchError");
        return of({ id: -1 }  as User);
      }))
      .pipe(flatMap((response: User) => {
        console.log("Inside flatMap", response);
        if (response.id !== -1)
        {
          return throwError("User already exists");
        }
        return this.addUser(email, password, name, imageUrl);
      }));
  }

  private addUser(email: string, password: string, name: string, imageUrl: string): Observable<User> {
    let user: User = {
      id: -1,
      email: email,
      name: name,
      password: password,
      imageUrl: imageUrl,
      isSeller: false
    };
    return this.userService.addUser(user);
  }
}

