import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmService } from './services/film.service';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FilmListComponent, FilmDetailsComponent],
  providers: [
    FilmService
  ]
})
export class FilmModule { }
