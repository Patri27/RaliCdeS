import { State, Store, Action, StateContext } from '@ngxs/store';
import { MediaService } from '../services/media.service';
import { Photo } from '../media.models';
import { GetGallerySuccess, GetGalleryFailed, GetGallery } from './media.actions';
import { tap, catchError } from 'rxjs/operators';
import { SetErrors } from 'src/app/error/store/error.actions';

@State<Photo[]>({
  name: 'media',
  defaults: []
})

export class MediaState {
  constructor(private newsService: MediaService, private store: Store) { }

  @Action(GetGallery)
  getNews({ dispatch }: StateContext<Photo[]>) {
    return this.newsService.getGallery().pipe(
      tap(photos => dispatch(new GetGallerySuccess(photos))),
      catchError(error => dispatch(new GetGalleryFailed(error.error)))
    );
  }

  @Action(GetGallerySuccess)
  getNewsSuccess(
    { setState }: StateContext<Photo[]>,
    { photos }: GetGallerySuccess
  ) {
    setState(
      photos.sort((p1, p2) => {
        return p2.uploadedAt - p1.uploadedAt;
      })
    );
  }

  @Action([GetGalleryFailed])
  error({ dispatch }: StateContext<Photo[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }
}
