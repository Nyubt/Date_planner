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
  public validLogin = false

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
    console.log(this.contactForm.value);
    if (this.loginService.authenticate(this.contactForm.value.email, this.contactForm.value.password)) {
      this.router.navigate(['contacts']);
      this.validLogin = true;
    } else {
      this.validLogin = false;
    }
  }
}
