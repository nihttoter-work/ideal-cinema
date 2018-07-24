import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { FilmFilterService } from '../../film-list/services/film-filter.service';
import * as FilmActions from '../actions/film.actions';
import { Store, Action } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilmState } from '../states/film.state';
import { Film } from '../../models/film';

@Injectable()
export class FilmEffects {
    constructor(
        private store: Store<AppState>,
        private actions$: Actions,
        private filmFilterService: FilmFilterService
    ) { }

    @Effect()
    GetFilmsEffect$ = this.actions$.ofType(FilmActions.GET_FILMS, FilmActions.FILTER_FILMS, FilmActions.FILTER_FILMS_BY_GENRE).pipe(
        withLatestFrom(this.store.select('films')),
        switchMap((value: [Action, FilmState]) =>
            this.filmFilterService.filterFilms(value[1].films, value[1].wordToFilter, value[1].genresToFilter)
        ),
        map((films: Film[]) => {
            return new FilmActions.GetFilteredFilms(films);
        })
    );
}
