import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './containers/events/events.component';
import { EventComponent } from './containers/event/event.component';
import { NgxsModule } from '@ngxs/store';
import { EventState } from './store/event.state';

@NgModule({
  declarations: [EventsComponent, EventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    NgxsModule.forFeature([EventState])
  ]
})
export class EventsModule { }
