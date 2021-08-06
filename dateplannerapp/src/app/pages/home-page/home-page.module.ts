import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { BannerDetailsComponent } from './banner-details/banner-details.component';
import { TextImageComponent } from './text-image/text-image.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';


const routes: Routes = [{ path: '', component: HomePageComponent }];

@NgModule({
  declarations: [
    HomePageComponent,
    BannerDetailsComponent,
    TextImageComponent,
    JumbotronComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
