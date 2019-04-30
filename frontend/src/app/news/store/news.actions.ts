import { News, NewsRequest } from '../news.models';
import { Error } from 'src/app/error/error.models';

export class GetNews {
  static readonly type = '[News] GetNews';
}

export class GetNewsSuccess {
  static readonly type = '[News] GetNewsSuccess';
  constructor(public news: News[]) { }
}

export class GetNewsFailed {
  static readonly type = '[News] GetNewsFailed';
  constructor(public errors: Error[]) { }
}

export class AddNews {
  static readonly type = '[News] AddNews';
  constructor(public newsRequest: NewsRequest) { }
}

export class AddNewsSuccess {
  static readonly type = '[News] AddNewsSuccess';
  constructor(public news: News) { }
}

export class AddNewsFailed {
  static readonly type = '[News] AddNewsFailed';
  constructor(public errors: Error[]) { }
}
