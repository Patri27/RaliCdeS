import { Event } from '../events.models';


export class GetEvents {
  static readonly type = '[Event] GetEvents';
}

export class GetEventsSuccess {
  static readonly type = '[Event] GetEventsSuccess';
  constructor(public event: Event[]) { }
}

export class GetEventsFailed {
  static readonly type = '[Event] GetEventsFailed';
  constructor(public errors: Error[]) { }
}
