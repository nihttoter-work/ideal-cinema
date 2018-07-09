import { Component, OnInit } from '@angular/core';
import { FilmService } from '../../../services/film.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Film } from '../../../models/film';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  film$: Observable<Film>;
  imgCdn = environment.filmImagesUrl;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.film$ = this.route.params.pipe(
      switchMap(params => this.filmService.get(parseInt(params.id, 10)))
    );
  }

}
