import { Action, Store, StateContext, State } from '@ngxs/store';
import { GetEvents, GetEventsSuccess, GetEventsFailed } from './event.actions';
import { EventService } from '../services/event.service';
import { tap, catchError } from 'rxjs/operators';

@State<Event[]>({
  name: 'events',
  defaults: []
})

export class EventState {

  constructor(private eventService: EventService, private store: Store) { }
  @Action(GetEvents)
  getEvent({ dispatch }: StateContext<Event[]>) {
    return this.eventService.getEvents().pipe(
      tap(events => dispatch(new GetEventsSuccess(events))),
      catchError(error => dispatch(new GetEventsFailed(error.error)))
    );
  }
}
