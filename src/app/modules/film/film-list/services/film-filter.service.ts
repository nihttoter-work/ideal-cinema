import { Injectable } from '@angular/core';
import { Observable, of, zip } from 'rxjs';
import { Film } from '../../models/film';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import { FilmState } from '../../store/states/film.state';
import { switchMap, map } from '../../../../../../node_modules/rxjs/operators';
import { GenreType } from '../../models/genre';


@Injectable({
  providedIn: 'root'
})
export class FilmFilterService {
  constructor(
  ) { }

  filterFilms(films: Film[] = [], wordToFilter: string, genresToFilter: GenreType[]): Observable<Film[]> {
    return of(
      films
        .filter(film => film.name.toLowerCase().indexOf(wordToFilter.toLowerCase()) >= 0)
        .filter(film => {
          return genresToFilter.length === 0 ||
            film.genres.some(genre => genresToFilter.indexOf(genre) >= 0);
        })
    );
  }
}
