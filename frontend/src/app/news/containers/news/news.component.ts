import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetNews } from '../../store/news.actions';
import { NewsState } from '../../store/news.state';
import { Observable } from 'rxjs';
import { News } from '../../news.models';

@Component({
  selector: 'rcs-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  @Select(NewsState) news$: Observable<News[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetNews());
  }
}
