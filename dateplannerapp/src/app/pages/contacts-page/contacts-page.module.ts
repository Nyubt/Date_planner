import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactsPageComponent } from './contacts-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ContactsPageComponent }];

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ContactsPageModule { }
