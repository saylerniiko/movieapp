import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  myControl = new FormControl();
  query = '';
  moviesList = [];
  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
  }
  search(query) {
    this.movieService.search(query)
      .subscribe(
        (response) => {
          this.moviesList = response['results'];
        }
      );
  }
  launchQuizForMovie(id) {
    this.router.navigate(['./quiz/' + id]);
  }
}
