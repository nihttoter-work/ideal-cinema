import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmDetailsComponent } from './components/film-details/film-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FilmDetailsComponent,
  ],
  exports: [
    FilmDetailsComponent
  ]
})
export class FilmDetailsModule { }
