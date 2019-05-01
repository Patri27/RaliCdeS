import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { AuthGuard } from '../auth/services/auth.guard';
import { AddNewsComponent } from './containers/add-news/add-news.component';
import { UploadPhotoComponent } from './containers/upload-photo/upload-photo.component';
import { AdminWallComponent } from './containers/admin-wall/admin-wall.component';
import { UpdateNewsComponent } from './containers/update-news/update-news.component';

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
        path: 'subir-foto',
        component: UploadPhotoComponent
      },
      {
        path: 'modificar-noticias',
        component: UpdateNewsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
