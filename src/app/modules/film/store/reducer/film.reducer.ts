import * as FilmActions from './../actions/film.actions';
import { FilmState } from '../states/film.state';
import { Film } from '../../models/film';

const initialState: FilmState = <FilmState>{
    films: [],
    filteredFilms: []
};


export function filmsReducer(state: FilmState = initialState, action: FilmActions.FilmActions) {
    switch (action.type) {
        case FilmActions.GET_FILMS:
            return <FilmState>{
                films: [...action.payload],
                filteredFilms: [...action.payload]
            };
        case FilmActions.FILTER_FILMS:
            return <FilmState>{
                films: [...state.films],
                filteredFilms: [...state.films.filter(film => film.name.toLowerCase().indexOf(action.payload.toLowerCase()) >= 0)]
            };
        default:
            return state;
    }
}
