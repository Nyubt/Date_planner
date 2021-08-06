import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/contacts-page/contacts-page.module').then(m => m.ContactsPageModule)
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
