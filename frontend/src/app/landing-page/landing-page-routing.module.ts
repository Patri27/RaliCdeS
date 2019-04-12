import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../shared/components/layout/layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'landing-page',
        component: LandingPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }
