import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private movieService: MovieService, private route: ActivatedRoute) { }
  movie;
  cast = [];
  movieCast = [];
  randomCast = [];
  ngOnInit() {
    this.getMovie();
  }
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => {
        this.movie = movie;
        console.log(this.movie);
      });
    this.movieService.getCast(id)
      .subscribe(credits => {
        this.movieCast = credits.cast.slice(0, 10);
        this.createActorList();
        console.log(this.cast);
      });
    this.movieService.getPopularActors()
      .subscribe(actors => {
        this.randomCast = actors['results'].slice(0, 50);
        this.createActorList();
        console.log(this.cast);
      });
  }
  createActorList(): void {
    this.cast = [];
    for (let i = 0; i < 2; i++) {
      this.cast.push(this.movieCast[Math.floor(Math.random() * this.movieCast.length)]);
    }
    for (let i = 0; i < 3; i++) {
      this.cast.push(this.randomCast[Math.floor(Math.random() * this.randomCast.length)]);
    }
    this.cast = _.shuffle(this.cast);
  }
}
