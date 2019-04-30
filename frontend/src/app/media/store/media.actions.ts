import { Photo } from '../media.models';
import { Error } from 'src/app/error/error.models';

export class GetGallery {
  static readonly type = '[Photo] GetGallery';
}

export class GetGallerySuccess {
  static readonly type = '[Photo] GetGallerySuccess';
  constructor(public photos: Photo[]) { }
}

export class GetGalleryFailed {
  static readonly type = '[Photo] GetGalleryFailed';
  constructor(public errors: Error[]) { }
}
