import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page.component';
import { RouterModule, Routes } from '@angular/router';
//import { LoginComponent } from '../login/login.component';

const routes: Routes = [{ path: '', component: ContactsPageComponent }];

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
    //LoginComponent
  ]
})
export class ContactsPageModule { }
