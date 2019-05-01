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

  addNews(title: string, content: string, category: string): Observable<News> {
    return this.http.post<News>(`${environment.apiBaseUrl}/news/add`, {
      title,
      content,
      category
    });
  }

  updateNews(_id: string, { title, content, category }: News): Observable<News> {
    const news = {
      title,
      content,
      category
    };
    return this.http.put<News>(`${environment.apiBaseUrl}/news/update?q=${_id}`, news);
  }

  removeNews(newsId: string): Observable<News> {
    return this.http.delete<News>(`${environment.apiBaseUrl}/news/remove?q=${newsId}`);
  }
}
