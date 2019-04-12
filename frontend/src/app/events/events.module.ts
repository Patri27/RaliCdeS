import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './containers/events/events.component';
import { EventComponent } from './containers/event/event.component';

@NgModule({
  declarations: [EventsComponent, EventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule
  ]
})
export class EventsModule { }
