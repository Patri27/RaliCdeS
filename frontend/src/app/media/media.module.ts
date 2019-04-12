import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { PhotosComponent } from './containers/photos/photos.component';
import { PhotoComponent } from './containers/photo/photo.component';

@NgModule({
  declarations: [PhotosComponent, PhotoComponent],
  imports: [
    CommonModule,
    MediaRoutingModule
  ]
})
export class MediaModule { }
