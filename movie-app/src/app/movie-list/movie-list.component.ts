import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  myControl = new FormControl();
  title = 'Movie Quiz';
  query = '';
  options: string[] = ['One', 'Two', 'Three'];
  moviesList = [];
  constructor(private movieService: MovieService) {}

  ngOnInit() {
  }

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
