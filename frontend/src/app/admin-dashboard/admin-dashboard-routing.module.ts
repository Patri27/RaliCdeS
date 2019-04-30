import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { AddNewsComponent } from './containers/add-news/add-news.component';
import { AddEventsComponent } from './containers/add-events/add-events.component';
import { UploadPhotoComponent } from './containers/upload-photo/upload-photo.component';
import { UpdateAboutComponent } from './containers/update-about/update-about.component';
import { UpdateAboutUsComponent } from './containers/update-about-us/update-about-us.component';
import { AdminWallComponent } from './containers/admin-wall/admin-wall.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin-wall',
        component: AdminWallComponent
      },
      {
        path: 'crear-noticia',
        component: AddNewsComponent
      },
      {
        path: 'crear-evento',
        component: AddEventsComponent
      },
      {
        path: 'subir-foto',
        component: UploadPhotoComponent
      },
      {
        path: 'update-about',
        component: UpdateAboutComponent
      },
      {
        path: 'update-about-us',
        component: UpdateAboutUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
