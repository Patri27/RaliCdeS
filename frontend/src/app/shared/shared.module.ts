import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormControlComponent } from './components/forms/form-control.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './components/forms/form.component';
import { UserFriendlyDatePipe } from './pipes/user-friendly-date.pipe';
import { ClickPreventDefaultDirective } from './directives/click-prevent-default.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    FormControlComponent,
    FormComponent,
    UserFriendlyDatePipe,
    ClickPreventDefaultDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    InfiniteScrollModule
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    FormControlComponent,
    FormComponent,
    UserFriendlyDatePipe,
    ClickPreventDefaultDirective
  ]
})
export class SharedModule { }
