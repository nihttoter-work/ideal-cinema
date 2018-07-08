import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { FilmItemComponent } from './components/film-item/film-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilmListComponent,
    FilmSearchComponent,
    FilmItemComponent,
  ],
  exports: [
    FilmListComponent
  ]
})
export class FilmListModule { }
