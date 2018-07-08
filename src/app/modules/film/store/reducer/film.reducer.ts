import { Film } from '../../models/film';
import * as FilmActions from './../actions/film.actions';

export function filmsReducer(state: Film[] = [], action: FilmActions.FilmActions) {

    // Section 3
    switch (action.type) {
        case FilmActions.GET_FILMS:
            return [...state, ...action.payload];
        default:
            return state;
    }
}
