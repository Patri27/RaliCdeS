import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './containers/news/news.component';
import { SingleNewsComponent } from './containers/single-news/single-news.component';
import { NewsState } from './store/news.state';
import { NgxsModule } from '@ngxs/store';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewsComponent, SingleNewsComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    NgxsModule.forFeature([NewsState]),
    SharedModule
  ]
})
export class NewsModule { }
