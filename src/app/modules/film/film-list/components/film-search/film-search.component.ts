import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as FilmActions from '../../../store/actions/film.actions';
import { GenreType } from '../../../models/genre';

export class GenreCart {
  genre: GenreType;
  isSelected: boolean;
}

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
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

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(
      newVal => {
        this.store.dispatch(new FilmActions.FilterFilms(newVal));
      });
  }

}
