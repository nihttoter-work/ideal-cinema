import { Action } from '@ngrx/store';
import { Film } from '../../models/film';

export const GET_FILMS = '[FILM] Get';

export const FILTER_FILMS = '[FILM] Filter';

export class GetFilms implements Action {
    readonly type = GET_FILMS;

    constructor(public payload: Film[]) { }
}

export class FilterFilms implements Action {
    readonly type = FILTER_FILMS;

    constructor(public payload: string) { }
}

export type FilmActions = GetFilms | FilterFilms;
