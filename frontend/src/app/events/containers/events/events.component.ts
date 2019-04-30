import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { EventState } from '../../store/event.state';
import { Observable } from 'rxjs';
import { GetEvents } from '../../store/event.actions';

@Component({
  selector: 'rcs-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Select(EventState) events$: Observable<Event[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetEvents());
  }

}
