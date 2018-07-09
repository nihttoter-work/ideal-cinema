import * as FilmActions from './../actions/film.actions';
import { FilmState } from '../states/film.state';
import { Film } from '../../models/film';

const initialState: FilmState = <FilmState>{
    films: [],
    wordToFilter: '',
    genresToFilter: []
};


export function filmsReducer(state: FilmState = initialState, action: FilmActions.FilmActions) {
    switch (action.type) {
        case FilmActions.GET_FILMS:
            return <FilmState>{
                films: [...action.payload],
                wordToFilter: state.wordToFilter,
                genresToFilter: state.genresToFilter
            };
        case FilmActions.FILTER_FILMS:
            return <FilmState>{
                films: [...state.films],
                wordToFilter: action.payload,
                genresToFilter: state.genresToFilter
            };
        case FilmActions.FILTER_FILMS_BY_GENRE:
            return <FilmState>{
                films: [...state.films],
                wordToFilter: state.wordToFilter,
                genresToFilter: action.payload
            };
        default:
            return state;
    }
}
