import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '?api_key=042929907107a9de9df582113d12483c';
  private apiUrl = 'https://api.themoviedb.org/';
  constructor(private http: HttpClient) { }

  search(query) {
    // query = this.convertToSlug(query);
    return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' + query );
  }
}
