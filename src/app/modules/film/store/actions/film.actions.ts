import { Action } from '@ngrx/store';
import { Film } from '../../models/film';

export const GET_FILMS = '[FILM] Get';

export class GetFilms implements Action {
    readonly type = GET_FILMS;

    constructor(public payload: Film[]) { }
}

export type FilmActions = GetFilms;
