import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';

import { MediaRoutingModule } from './media-routing.module';
import { PhotosComponent } from './containers/photos/photos.component';
import { PhotoComponent } from './containers/photo/photo.component';
import { MediaState } from './store/media.state';

@NgModule({
  declarations: [PhotosComponent, PhotoComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    NgxsModule.forFeature([MediaState])
  ]
})
export class MediaModule { }
