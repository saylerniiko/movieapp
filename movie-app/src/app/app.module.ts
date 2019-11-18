import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatAutocompleteModule, MatSidenavModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { QuizComponent } from './quiz/quiz.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { YearPipe } from './year.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    MovieListComponent,
    YearPipe
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    HttpClientModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
