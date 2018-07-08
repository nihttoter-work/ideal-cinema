import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './modules/film/film-list/components/film-list/film-list.component';

const routes: Routes = [
  { path: '', component: FilmListComponent },
  { path: '**', component: FilmListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
