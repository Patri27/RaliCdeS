import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetNews } from 'src/app/news/store/news.actions';
import { GetGallery } from 'src/app/media/store/media.actions';
import { GetEvents } from 'src/app/events/store/event.actions';

@Component({
  selector: 'rcs-admin-wall',
  templateUrl: './admin-wall.component.html',
  styleUrls: ['./admin-wall.component.scss']
})
export class AdminWallComponent implements OnInit {

  isGetNewsVisible = true;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetNews());
    this.store.dispatch(new GetGallery());
  }



  toggleForm(isGetNewsClick: boolean) {
    if (
      (isGetNewsClick && this.isGetNewsVisible) ||
      (!isGetNewsClick && !this.isGetNewsVisible)
    ) {
      return;
    }

    this.isGetNewsVisible = !this.isGetNewsVisible;
  }

}
