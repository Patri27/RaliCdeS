import { Component, OnInit, Input } from '@angular/core';
import { News } from 'src/app/news/news.models';
import { Auth } from 'src/app/auth/auth.models';
import { Store } from '@ngxs/store';
import { AddNews } from 'src/app/news/store/news.actions';

@Component({
  selector: 'rcs-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {

  @Input() user: Auth;

  constructor(private store: Store) { }

  ngOnInit() {
  }

  addNews(title, content) {
    this.store.dispatch(new AddNews({ title, content }));
  }
}
