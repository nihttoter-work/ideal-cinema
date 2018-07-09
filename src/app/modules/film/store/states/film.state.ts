import { Film } from '../../models/film';
import { GenreType } from '../../models/genre';

export interface FilmState {
    films: Film[];
    wordToFilter: string;
    genresToFilter: GenreType[];
}
