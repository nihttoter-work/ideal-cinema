import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of, Observable } from 'rxjs';
import { timeout } from 'rxjs/operators';
import { movies } from 'src/assets/cdn/movie.mock-data';
import { Film } from '../models/film';


@Injectable()
export class FilmService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  list(): Observable<Film[]> {
    return of(movies).pipe(
      timeout(500)
    );
  }

  get(id: number) {
    return of(movies.find(movie => movie.id === id)).pipe(
      timeout(500)
    );
  }
}
