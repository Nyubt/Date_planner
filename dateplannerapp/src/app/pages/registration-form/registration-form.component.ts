import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private router: Router,
  private registrationService: RegistrationService) { }

  buildForm() {
    this.contactForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      name: new FormControl(''),
      imageUrl: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.buildForm();
  }

  public registerUser(){
    let ceva = this.registrationService.register(this.contactForm.value.email, this.contactForm.value.password, this.contactForm.value.name,
    this.contactForm.value.imageUrl ? this.contactForm.value.imageUrl : 'https://miro.medium.com/max/280/1*Yj4m6Nx47xowZcyoVT_LVg.png')
    .subscribe((response: User) => {
       console.log(response);
       if (response == null){
         console.log("fail");
       } else {
         console.log("success");
       }
   },
   (error) => {
    alert(error);
   }
   );
    //this.router.navigate(['']);
  }
}
