import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
