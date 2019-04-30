import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminWallComponent } from './containers/admin-wall/admin-wall.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AuthModule } from '../auth/auth.module';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { AddEventsComponent } from './components/add-events/add-events.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { UpdateAboutComponent } from './components/update-about/update-about.component';
import { UpdateAboutUsComponent } from './components/update-about-us/update-about-us.component';

@NgModule({
  declarations: [
    NavComponent,
    DashboardComponent,
    AdminWallComponent,
    AdminHeaderComponent,
    AddNewsComponent,
    AddEventsComponent,
    UploadPhotoComponent,
    UpdateAboutComponent,
    UpdateAboutUsComponent
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    AuthModule
  ]
})
export class AdminDashboardModule { }
