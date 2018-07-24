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
  films$: Observable<Film[]>;

  constructor(
    private store: Store<AppState>,
    private filmService: FilmService,
  ) { }

  ngOnInit() {
    this.films$ = this.store.select('films').pipe(
      map(films => films.filteredFilms),
      shareReplay()
    );

    this.getFilms();
  }

  getFilms() {
    this.filmService.list().subscribe(films => {
      this.store.dispatch(new FilmActions.GetFilms(films));
    });
  }
}
