import { Component, OnInit, Input } from '@angular/core';
import { GenreType } from '../../../models/genre';
import { FilmCardService } from '../../services/film-card.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.scss']
})
export class FilmCardComponent implements OnInit {
  @Input() genre: GenreType;
  isSelected = false;

  constructor(
    private filmCardService: FilmCardService
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.filmCardService.selectGenre(this.genre);
    } else {
      this.filmCardService.deSelectGenre(this.genre);
    }
  }

}
