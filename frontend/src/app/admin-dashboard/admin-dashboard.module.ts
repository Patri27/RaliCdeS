import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AdminWallComponent } from './containers/admin-wall/admin-wall.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AuthModule } from '../auth/auth.module';
import { AddNewsComponent } from './containers/add-news/add-news.component';
import { AddEventsComponent } from './containers/add-events/add-events.component';
import { UploadPhotoComponent } from './containers/upload-photo/upload-photo.component';
import { UpdateAboutComponent } from './containers/update-about/update-about.component';
import { UpdateAboutUsComponent } from './containers/update-about-us/update-about-us.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


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
    UpdateAboutUsComponent,
  ],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    AuthModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminDashboardModule { }
