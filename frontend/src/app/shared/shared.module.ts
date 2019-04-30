import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormControlComponent } from './components/forms/form-control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './components/forms/form.component';
import { UserFriendlyDatePipe } from './pipes/user-friendly-date.pipe';

@NgModule({
  declarations: [
    HeaderComponent, LayoutComponent, FooterComponent, FormControlComponent, FormComponent, UserFriendlyDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FormControlComponent,
    FormComponent,
    UserFriendlyDatePipe
  ]
})
export class SharedModule { }
