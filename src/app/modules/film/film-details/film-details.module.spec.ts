import { FilmDetailsModule } from './film-details.module';

describe('FilmDetailsModule', () => {
  let filmDetailsModule: FilmDetailsModule;

  beforeEach(() => {
    filmDetailsModule = new FilmDetailsModule();
  });

  it('should create an instance', () => {
    expect(filmDetailsModule).toBeTruthy();
  });
});
