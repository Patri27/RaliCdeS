import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MediaState } from '../../store/media.state';
import { Photo } from '../../media.models';
import { GetGallery } from '../../store/media.actions';

@Component({
  selector: 'rcs-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  @Select(MediaState) photos$: Observable<Photo[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetGallery());
  }

}
