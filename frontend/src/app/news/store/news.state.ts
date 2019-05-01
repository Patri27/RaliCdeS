import { State, Store, Action, StateContext } from '@ngxs/store';
import { News } from '../news.models';
import { NewsService } from '../services/news.service';
import {
  GetNews,
  GetNewsSuccess,
  GetNewsFailed,
  AddNews,
  AddNewsSuccess,
  AddNewsFailed,
  UpdateNews,
  UpdateNewsSuccess,
  UpdateNewsFailed,
  DeleteNews
} from './news.actions';
import { tap, catchError } from 'rxjs/operators';
import { SetErrors } from 'src/app/error/store/error.actions';

@State<News[]>({
  name: 'news',
  defaults: []
})

export class NewsState {
  constructor(private newsService: NewsService, private store: Store) { }

  @Action(GetNews)
  getNews({ dispatch }: StateContext<News[]>) {
    return this.newsService.getNews().pipe(
      tap(news => dispatch(new GetNewsSuccess(news))),
      catchError(error => dispatch(new GetNewsFailed(error.error)))
    );
  }

  @Action(GetNewsSuccess)
  getNewsSuccess(
    { setState }: StateContext<News[]>,
    { news }: GetNewsSuccess
  ) {
    setState(
      news.sort((p1, p2) => {
        return p2.createdAt - p1.createdAt;
      })
    );
  }

  @Action(AddNews)
  addNews({ dispatch }: StateContext<News[]>, { newsRequest }: AddNews) {
    const currentUser = this.store.selectSnapshot(state => state.auth);

    return this.newsService.addNews(newsRequest.title, newsRequest.content, newsRequest.category).pipe(
      tap(news => dispatch(new AddNewsSuccess({
        ...news,
        author: currentUser
      })
      )
      ),
      catchError(error => dispatch(new AddNewsFailed(error.error))));
  }

  @Action(AddNewsSuccess)
  addNewsSuccess(
    { setState, getState }: StateContext<News[]>,
    { news }: AddNewsSuccess
  ) {
    setState([news, ...getState()]);
  }

  @Action(UpdateNews)
  updateNews({ dispatch }: StateContext<News>, { _id, newsRequest }: UpdateNews) {
    return this.newsService.updateNews(_id, newsRequest).pipe(
      tap(news => dispatch(new UpdateNewsSuccess({
        ...news
      })
      )),
      catchError(error => dispatch(new UpdateNewsFailed(error.error)))
    );
  }

  @Action(UpdateNewsSuccess)
  updateNewsSuccess(
    { setState, getState }: StateContext<News[]>,
    { news }: UpdateNewsSuccess
  ) {
    setState([news, ...getState()]);
  }

  @Action([GetNewsFailed, AddNewsFailed, UpdateNewsFailed])
  error({ dispatch }: StateContext<News[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

}
