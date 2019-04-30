import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Event } from '../events.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${environment.apiBaseUrl}/events`);
  }

  addEvent(title: string, content: string): Observable<Event[]> {
    return this.http.post<Event[]>(`${environment.apiBaseUrl}/events/add`, {
      title,
      content
    });
  }

  updateEvent(event: Event): Observable<Event[]> {
    return this.http.put<Event[]>(`${environment.apiBaseUrl}/events/update`, event);
  }

  removeEvent(newsId: string): Observable<Event[]> {
    return this.http.delete<Event[]>(`${environment.apiBaseUrl}/events/remove?q=${newsId}`);
  }
}
