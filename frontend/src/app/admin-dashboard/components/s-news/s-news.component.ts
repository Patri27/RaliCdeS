import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news/news.models';

@Component({
  selector: 'rcs-s-news',
  templateUrl: './s-news.component.html',
  styleUrls: ['./s-news.component.scss']
})
export class SNewsComponent implements OnInit {
  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
