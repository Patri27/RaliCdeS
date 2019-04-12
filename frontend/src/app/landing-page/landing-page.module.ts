import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingPageHeroComponent } from './components/landing-page-hero/landing-page-hero.component';

@NgModule({
  declarations: [LandingPageComponent, LandingPageHeroComponent],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    SharedModule
  ]
})
export class LandingPageModule { }
