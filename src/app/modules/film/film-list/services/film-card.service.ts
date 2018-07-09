import { Injectable } from '@angular/core';
import { GenreType } from '../../models/genre';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as FilmActions from '../../store/actions/film.actions';


@Injectable({
  providedIn: 'root'
})
export class FilmCardService {
  genres: GenreType[] = [
    GenreType.Action,
    GenreType.Adventure,
    GenreType.Biography,
    GenreType.Comedy,
    GenreType.Crime,
    GenreType.Drama,
    GenreType.History,
    GenreType.Mystery,
    GenreType.Scifi,
    GenreType.Sport,
    GenreType.Thriller
  ];

  selectedGenres: GenreType[] = [];

  constructor(
    private store: Store<AppState>,
  ) { }

  selectGenre(genre: GenreType) {
    this.selectedGenres = this.selectedGenres.filter(currentGenre => currentGenre !== genre);
    this.selectedGenres = [...this.selectedGenres, genre];
    this.store.dispatch(new FilmActions.FilterFilmsByGenre(this.selectedGenres));
  }

  deSelectGenre(genre: GenreType) {
    this.selectedGenres = this.selectedGenres.filter(currentGenre => currentGenre !== genre);
    this.store.dispatch(new FilmActions.FilterFilmsByGenre(this.selectedGenres));
  }
}
