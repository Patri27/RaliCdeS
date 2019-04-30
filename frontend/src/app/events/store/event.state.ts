import { Action, Store, StateContext, State } from '@ngxs/store';
import { GetEvents, GetEventsSuccess, GetEventsFailed } from './event.actions';
import { EventService } from '../services/event.service';
import { tap, catchError } from 'rxjs/operators';
import { Event } from '../events.models';
import { SetErrors } from 'src/app/error/store/error.actions';

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

  @Action(GetEventsSuccess)
  getEventSuccess(
    { setState }: StateContext<Event[]>,
    { events }: GetEventsSuccess) {
    setState(events);
  }

  @Action(GetEventsFailed)
  error({ dispatch }: StateContext<Event[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }
}
