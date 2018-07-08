import { FilmState } from './modules/film/store/states/film.state';
import { Film } from './modules/film/models/film';

export interface AppState {
    readonly films: Film[];
}
