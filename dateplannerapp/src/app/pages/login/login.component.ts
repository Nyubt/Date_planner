import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  contactForm: FormGroup;
  public validLogin: boolean = false

  constructor(private router: Router,
  private loginService: AuthenticationService) { }

  buildForm() {
    this.contactForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public checkLogin() {
    //console.log(this.contactForm.value);
    this.loginService.authenticate(this.contactForm.value.email, this.contactForm.value.password)
    .subscribe((response: boolean) => {
        this.validLogin = response;
        console.log(response);
        if (response == true){
          this.router.navigate(['']);
          console.log("fail");
        }
      },
      (error) => {
        alert(error);
      }
    );
    //console.log(this.validLogin);
    /*if (this.loginService.authenticate(this.contactForm.value.email, this.contactForm.value.password)) {
      console.log("Logged in!");
      this.router.navigate(['']);
      this.validLogin = true;
    } else {
      this.validLogin = false;
    }*/
  }
}
