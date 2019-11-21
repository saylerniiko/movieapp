import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { Actor } from '../models/actor';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatSelectionList } from '@angular/material';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  movie;
  cast = [];
  movieCast = [];
  randomCast = [];
  results = [];
  resultSummary = '';
  @ViewChild('actors', null) actors: MatSelectionList;
  constructor(private movieService: MovieService, private route: ActivatedRoute, private router: Router) { }

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
      .subscribe((credits: any) => {
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
    if (!this.movieCast || !this.randomCast) {
      return;
    }
    this.cast = [];
    for (let i = 0; i < 2; i++) {
      const actor = new Actor(this.movieCast[Math.floor(Math.random() * this.movieCast.length)], true);
      this.cast.push(actor);
    }
    for (let i = 0; i < 3; i++) {
      const actor = new Actor(this.randomCast[Math.floor(Math.random() * this.randomCast.length)], false);
      if (_.find(this.cast, { id: actor.id })) {
        // if the actor already exists in the list don't add it and try again.
        // (this happens with popular movies since popular actors are in popular movies)
        i--;
      } else {
        this.cast.push(actor);
      }

    }
    this.cast = _.shuffle(this.cast);
  }
  selectedTwo(): boolean {
    if (this.actors && !this.resultSummary && this.actors.selectedOptions.selected.length === 2) {
      return false;
    }
    return true;
  }

  submit() {
    this.resultSummary = '';
    this.results = [];
    let correct = 0;
    this.actors.selectedOptions.selected.forEach(actor => {
      if (actor.value.inMovie) {
        this.results.push(actor.value.name + ' is in ' + this.movie.title + '.');
        correct++;
      } else {
        this.results.push(actor.value.name + ' is not in ' + this.movie.title + '.')
      }
      switch (correct) {
        case 0:
          this.resultSummary = 'Oh no! You didn\'t get any of them correct.';
          break;
        case 1:
          this.resultSummary = 'You were partially correct.';
          break;
        case 2:
          this.resultSummary = 'Congratulations you got both actors correct!!';
          break;
        default:
          this.resultSummary = 'I don\'t know what you did but lets pretend you didn\'t';
          break;
      }

    });
  }
  goBack() {
    this.router.navigate(['./']);
  }
}
