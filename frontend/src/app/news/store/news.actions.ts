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

export class UpdateNews {
  static readonly type = '[News] UpdateNews';
  constructor(public _id: string, public newsRequest: News) { }
}

export class UpdateNewsSuccess {
  static readonly type = '[News] UpdateNewsSuccess';
  constructor(public news: News) { }
}

export class UpdateNewsFailed {
  static readonly type = '[News] UpdateNewsFailed';
  constructor(public errors: Error[]) { }
}

export class DeleteNews {
  static readonly type = '[News] DeleteNews';
  constructor(public id: string) { }
}

export class DeleteNewsSuccess {
  static readonly type = '[News] DeleteNewsSuccess';
  constructor(public news: News) { }
}

export class DeleteNewsFailed {
  static readonly type = '[News] DeleteNewsFailed';
  constructor(public errors: Error[]) { }
}
