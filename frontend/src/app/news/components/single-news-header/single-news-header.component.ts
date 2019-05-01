import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../news.models';

@Component({
  selector: 'rcs-single-news-header',
  templateUrl: './single-news-header.component.html',
  styleUrls: ['./single-news-header.component.scss']
})
export class SingleNewsHeaderComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
