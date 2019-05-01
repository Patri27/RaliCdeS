import { Component, OnInit, Input } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { NewsState } from 'src/app/news/store/news.state';
import { Observable } from 'rxjs';
import { News } from 'src/app/news/news.models';
import { GetNews } from 'src/app/news/store/news.actions';

@Component({
  selector: 'rcs-admin-wall',
  templateUrl: './admin-wall.component.html',
  styleUrls: ['./admin-wall.component.scss']
})
export class AdminWallComponent implements OnInit {
  @Select(NewsState) news$: Observable<News>[];
  @Input() news: News;


  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetNews());
  }
}
