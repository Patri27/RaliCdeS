import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './containers/routes/routes.component';

@NgModule({
  declarations: [RoutesComponent],
  imports: [
    CommonModule,
    RoutesRoutingModule
  ]
})
export class RoutesModule { }
