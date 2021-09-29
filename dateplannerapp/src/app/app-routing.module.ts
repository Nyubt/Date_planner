import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts-page/contacts-page.module').then(m => m.ContactsPageModule)
  },
  {
   path: 'login',
   loadChildren: () =>
     import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
  path: 'registration-form',
  loadChildren: () =>
    import('./pages/registration-form/registration-form.module').then(m => m.RegistrationFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
