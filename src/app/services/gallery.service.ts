import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  galleryUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  getGallery() {
    return this.http.get(this.galleryUrl);
  }
}
