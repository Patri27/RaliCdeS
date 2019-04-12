import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './events/events.module';
import { NewsModule } from './news/news.module';
import { MediaModule } from './media/media.module';
import { RoutesModule } from './routes/routes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    SharedModule,
    EventsModule,
    NewsModule,
    MediaModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
