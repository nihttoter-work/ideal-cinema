import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { Observable } from 'rxjs';
import { Film } from '../../../models/film';
import * as FilmActions from '../../../store/actions/film.actions';
import { FilmService } from '../../../services/film.service';
import { shareReplay, map } from 'rxjs/operators';
import { FilmState } from '../../../store/states/film.state';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  films: Observable<Film[]>;

  constructor(
    private store: Store<AppState>,
    private filmService: FilmService,
  ) { }

  ngOnInit() {
    this.films = this.store.select('films').pipe(
      map((currentFilmState: FilmState) => currentFilmState.films
        .filter(film => film.name.toLowerCase().indexOf(currentFilmState.wordToFilter.toLowerCase()) >= 0)
        .filter(film =>
          currentFilmState.genresToFilter.length === 0 || film.genres.some(genre => currentFilmState.genresToFilter.indexOf(genre) >= 0)
        )),
      shareReplay()
    );

    /* [...state.films.filter(film => film.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0)] */

    this.getFilms();
  }

  getFilms() {
    this.filmService.list().subscribe(films => {
      this.store.dispatch(new FilmActions.GetFilms(films));
    });
  }
}
