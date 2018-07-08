import { FilmListModule } from './film-list.module';

describe('FilmListModule', () => {
  let filmListModule: FilmListModule;

  beforeEach(() => {
    filmListModule = new FilmListModule();
  });

  it('should create an instance', () => {
    expect(filmListModule).toBeTruthy();
  });
});
