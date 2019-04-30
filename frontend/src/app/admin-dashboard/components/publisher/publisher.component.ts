import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Auth } from 'src/app/auth/auth.models';


@Component({
  selector: 'rcs-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  @Input() user: Auth;

  @Output() publish = new EventEmitter();

  title = '';
  content = '';

  constructor() { }

  ngOnInit() {
  }

  publishStatus() {
    if (!(this.title || this.content)) {
      return;
    }
    this.publish.emit(this.title, this.content);
  }

  exploreKeyPressed($event) {
    if ($event.which === 13 && $event.metaKey) {
      this.publish.emit(this.content);
    }

  }
}
