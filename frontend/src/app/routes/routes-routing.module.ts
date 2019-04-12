import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { RoutesComponent } from './containers/routes/routes.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'rutas',
      component: RoutesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
