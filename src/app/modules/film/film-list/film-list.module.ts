import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmListComponent } from './components/film-list/film-list.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmCardComponent } from './components/film-card/film-card.component';
import { FilmCardService } from './services/film-card.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FilmListComponent,
    FilmSearchComponent,
    FilmItemComponent,
    FilmCardComponent,
  ],
  exports: [
    FilmListComponent
  ],
  providers: [
    FilmCardService
  ]
})
export class FilmListModule { }
