import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../media.models';

@Component({
  selector: 'rcs-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photos: Photo;

  constructor() { }

  ngOnInit() {
  }

}
