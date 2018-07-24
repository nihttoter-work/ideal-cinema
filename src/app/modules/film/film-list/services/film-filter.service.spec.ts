import { TestBed, inject } from '@angular/core/testing';

import { FilmFilterService } from './film-filter.service';

describe('FilmFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilmFilterService]
    });
  });

  it('should be created', inject([FilmFilterService], (service: FilmFilterService) => {
    expect(service).toBeTruthy();
  }));
});
