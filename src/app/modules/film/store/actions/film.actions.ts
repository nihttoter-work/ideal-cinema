import { Action } from '@ngrx/store';
import { Film } from '../../models/film';
import { GenreType } from '../../models/genre';

export const GET_FILMS = '[FILM] Get';

export const FILTER_FILMS = '[FILM] Filter';

export const FILTER_FILMS_BY_GENRE = '[FILM] Filter By Genre';

export class GetFilms implements Action {
    readonly type = GET_FILMS;

    constructor(public payload: Film[]) { }
}

export class FilterFilms implements Action {
    readonly type = FILTER_FILMS;

    constructor(public payload: string) { }
}

export class FilterFilmsByGenre implements Action {
    readonly type = FILTER_FILMS_BY_GENRE;

    constructor(public payload: GenreType[]) { }
}

export type FilmActions = GetFilms | FilterFilms | FilterFilmsByGenre;
