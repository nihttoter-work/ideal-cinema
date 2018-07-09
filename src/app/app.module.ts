import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilmModule } from './modules/film/film.module';
import { LayoutModule } from './modules/shared/layout/layout.module';
import { AppRoutingModule } from './app.routing.module';
import { filmsReducer } from './modules/film/store/reducer/film.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      films: filmsReducer
    }),
    StoreDevtoolsModule.instrument(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FilmModule,
    LayoutModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
