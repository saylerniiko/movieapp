import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '?api_key=042929907107a9de9df582113d12483c';
  private apiUrl = 'https://api.themoviedb.org/';
  constructor(private http: HttpClient) { }
  private topActors;
  search(query) {
    return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' + query );
  }
  getMovie(id) {
    return this.http.get(this.apiUrl + '3/movie/' + id + this.apiKey );
  }
  getPoster(id) {
    return this.http.get(this.apiUrl + '3/movie/' + id + '/images' + this.apiKey);
  }
  getCast(id) {
    return this.http.get(this.apiUrl + '3/movie/' + id + '/credits'  + this.apiKey );
  }
  getPopularActors() {
    return this.http.get(this.apiUrl + '3/person/popular' + this.apiKey);
  }
  getRandomActors(number: Number) {
    let randomActors = [];
    if(!this.topActors){
      this.getPopularActors().subscribe(response => {
        this.topActors = response['results'];
        for(let i = 0; i < number; i++){
          randomActors.push(this.topActors[Math.floor(Math.random()*this.topActors.length)]);
        }
      });

    } else {
      for(let i = 0; i < number; i++){
        randomActors.push(this.topActors[Math.floor(Math.random()*this.topActors.length)]);
      }
    }

    return randomActors;

  }
}
