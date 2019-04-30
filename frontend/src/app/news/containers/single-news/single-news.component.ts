import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news.models';

@Component({
  selector: 'rcs-single-news',
  templateUrl: './single-news.component.html',
  styleUrls: ['./single-news.component.scss']
})
export class SingleNewsComponent implements OnInit {

  @Input() news: News;
  constructor() { }

  ngOnInit() {
  }

}
