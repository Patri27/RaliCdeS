import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../events.models';

@Component({
  selector: 'rcs-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }

}
