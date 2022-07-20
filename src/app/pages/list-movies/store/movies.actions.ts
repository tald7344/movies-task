import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { ListMovies } from '../model/list-movies.model';
import { MovieDetails } from '../model/movie-details.model';

export const loadMovies = createAction(
  '[Movies/API] Load Movies'
);

export const loadMoviesSuccess = createAction(
  '[Movies/API] Load Movies Success',
  props<{ message: ListMovies[] }>()
);

export const loadMoviesFailure = createAction(
  '[Movies/API] Load Movies Failure',
  props<{ error: string }>()
);

export const loadMovie = createAction(
  '[Movies/API] Load Movie',
  props<{ id: number }>()
);

export const loadMovieSuccess = createAction(
  '[Movies/API] Load Movie Success',
  props<{ message: MovieDetails }>()
);

export const loadMovieFailure = createAction(
  '[Movies/API] Load Movie Failure',
  props<{ error: string }>()
);

export const addMovie = createAction(
  '[Movies/API] Add Movie',
  props<{ data: ListMovies }>()
);

export const addMovieSuccess = createAction(
  '[Movies/API] Add Movie Success'
);

export const addMovieFailure = createAction(
  '[Movies/API] Add Movie Failure',
  props<{ error: string }>()
);

export const loadCategories = createAction(
  '[Movies/API] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Movies/API] Load Categories Success',
  props<{ message: any }>()
);

export const loadCategoriesFailure = createAction(
  '[Movies/API] Load Categories Failure',
  props<{ error: string }>()
);

export const loadMovieByCategoryId = createAction(
  '[Movies/API] Load Movies By Category Id',
  props<{ id: number }>()

);

export const loadMovieByCategoryIdSuccess = createAction(
  '[Movies/API] Load Movies By Category Id Success',
  props<{ message: ListMovies[] }>()
);

export const loadMovieByCategoryIdFailure = createAction(
  '[Movies/API] Load Movies By Category Id Failure',
  props<{ error: string }>()
);

export const updateMovie = createAction(
  '[Movies/API] Update Movie',
  props<{ data: Update<ListMovies> }>()
);

export const updateMovieSuccess = createAction(
  '[Movies/API] Update Movie Success'
);

export const updateMovieFailure = createAction(
  '[Movies/API] Update Movie Failure',
  props<{ error: string }>()
);

export const deleteMovie = createAction(
  '[Movies/API] Delete Movie',
  props<{ id: number }>()
);

export const deleteMovieSuccess = createAction(
  '[Movies/API] Delete Movie Success',
  props<{ id: number }>()
);

export const deleteMovieFailure = createAction(
  '[Movies/API] Delete Movie Failure',
  props<{ error: string }>()
);

