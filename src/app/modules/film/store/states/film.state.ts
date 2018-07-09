import { Film } from '../../models/film';

export interface FilmState {
    films: Film[];
    filteredFilms: Film[];
}
