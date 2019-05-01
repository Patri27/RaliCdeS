import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/media/media.models';

@Component({
  selector: 'rcs-s-photo',
  templateUrl: './s-photo.component.html',
  styleUrls: ['./s-photo.component.scss']
})
export class SPhotoComponent implements OnInit {
  @Input() photo: Photo;

  constructor() { }

  ngOnInit() {
  }

}
