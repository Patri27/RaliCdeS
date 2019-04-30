import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Photo } from '../media.models';

@Injectable({
  providedIn: 'root'
})

export class MediaService {

  constructor(private http: HttpClient) { }

  getGallery(): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${environment.apiBaseUrl}/gallery`);
  }

  uploadPhoto(image: File) {
    const formData = new FormData();

    formData.append('avatar', image);

    return this.http.post(`${environment.apiBaseUrl}/media/upload`, formData, {
      observe: 'response'
    });
  }
}

