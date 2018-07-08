import { Component, OnInit, Input } from '@angular/core';
import { Film } from '../../../models/film';
import { environment } from '../../../../../../environments/environment';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  @Input() film: Film;
  imgCdn = environment.filmImagesUrl;

  constructor() { }

  ngOnInit() {
  }

}
