import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  private url = 'https://jsonplaceholder.typicode.com/photos?_limit=15';
  constructor(private http:HttpClient) { }


  getPhotos() {
    return this.http.get(this.url);
  }
}
