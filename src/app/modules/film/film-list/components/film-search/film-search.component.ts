import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as FilmActions from '../../../store/actions/film.actions';
import { GenreType } from '../../../models/genre';
import { FilmCardService } from '../../services/film-card.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  genres: GenreType[] = this.filmCardService.genres;

  constructor(
    private store: Store<AppState>,
    private filmCardService: FilmCardService,
  ) { }

  ngOnInit() {
    this.searchControl.valueChanges.subscribe(
      newVal => {
        this.store.dispatch(new FilmActions.FilterFilms(newVal));
      });
  }

}
