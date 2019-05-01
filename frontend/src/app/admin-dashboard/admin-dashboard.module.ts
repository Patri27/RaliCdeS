import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AdminWallComponent } from './containers/admin-wall/admin-wall.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AuthModule } from '../auth/auth.module';
import { AddNewsComponent } from './containers/add-news/add-news.component';
import { UploadPhotoComponent } from './containers/upload-photo/upload-photo.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsModule } from '../news/news.module';
import { MediaModule } from '../media/media.module';
import { SPhotoComponent } from './components/s-photo/s-photo.component';
import { SNewsComponent } from './components/s-news/s-news.component';
import { UpdateNewsComponent } from './containers/update-news/update-news.component';


@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    AdminWallComponent,
    AdminHeaderComponent,
    AddNewsComponent,
    UploadPhotoComponent,
    SPhotoComponent,
    SNewsComponent,
    UpdateNewsComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule,
    NewsModule,
    MediaModule,
  ]
})
export class AdminDashboardModule { }
