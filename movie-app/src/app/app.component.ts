import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  myControl = new FormControl();
  title = 'Movie Quiz';
  query = '';
  options: string[] = ['One', 'Two', 'Three'];
  moviesList = [];
  constructor(private movieService: MovieService) {}

  search(query) {
    this.movieService.search(query)
    .subscribe(
      (response) => {
        this.moviesList = response['results'];
        console.log(this.moviesList);

      }
    );
  }
}
