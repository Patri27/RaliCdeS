import { Event } from '../events.models';


export class GetEvents {
  static readonly type = '[Event] GetEvents';
}

export class GetEventsSuccess {
  static readonly type = '[Event] GetEventsSuccess';
  constructor(public events: Event[]) { }
}

export class GetEventsFailed {
  static readonly type = '[Event] GetEventsFailed';
  constructor(public errors: Error[]) { }
}
