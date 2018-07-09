import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './modules/film/film-list/components/film-list/film-list.component';
import { FilmDetailsComponent } from './modules/film/film-details/components/film-details/film-details.component';

const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: 'film/:id', component: FilmDetailsComponent },
  { path: '**', component: FilmListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
