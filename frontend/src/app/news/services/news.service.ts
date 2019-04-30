import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { News } from '../news.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(private http: HttpClient) { }

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.apiBaseUrl}/news`);
  }

  addNews(title: string, content: string): Observable<News> {
    return this.http.post<News>(`${environment.apiBaseUrl}/news/add`, {
      title,
      content
    });
  }

  updateNews(news: News): Observable<News> {
    return this.http.put<News>(`${environment.apiBaseUrl}/news/update`, news);
  }

  removeNews(newsId: string): Observable<News> {
    return this.http.delete<News>(`${environment.apiBaseUrl}/news/remove?q=${newsId}`);
  }
}
