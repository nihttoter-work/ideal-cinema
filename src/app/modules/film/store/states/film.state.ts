import { Film } from '../../models/film';
import { GenreType } from '../../models/genre';

export interface FilmState {
    films: Film[];
    filteredFilms: Film[];
    wordToFilter: string;
    genresToFilter: GenreType[];
}
