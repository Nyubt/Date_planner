import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocketComponent } from './components/socket/socket.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

const components = [
  MenuComponent,
  TitleBarComponent,
  FooterComponent,
  SocketComponent,
  TopBarComponent
];

@NgModule({
  declarations: [
    MenuComponent,
    TitleBarComponent,
    FooterComponent,
    SocketComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
