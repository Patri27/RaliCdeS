import { State, Store, Action, StateContext } from '@ngxs/store';
import { News } from '../news.models';
import { NewsService } from '../services/news.service';
import { GetNews, GetNewsSuccess, GetNewsFailed, AddNews, AddNewsSuccess, AddNewsFailed } from './news.actions';
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

    return this.newsService.addNews(newsRequest.title, newsRequest.content).pipe(
      tap(news => dispatch(new AddNewsSuccess({
        ...news,
        author: currentUser
      })
      )
      ),
      catchError(error => dispatch(new AddNewsFailed(error.error))));
  }


  @Action([GetNewsFailed])
  error({ dispatch }: StateContext<News[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

}
