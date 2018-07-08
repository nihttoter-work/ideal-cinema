import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmService } from './services/film.service';
import { FilmListModule } from './film-list/film-list.module';
import { FilmDetailsModule } from './film-details/film-details.module';

@NgModule({
  imports: [
    CommonModule,
    FilmListModule,
    FilmDetailsModule
  ],
  providers: [
    FilmService
  ]
})
export class FilmModule { }
