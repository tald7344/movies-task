import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { ListMovies } from '../model/list-movies.model';
import * as moviesActions from './movies.actions';
import { ListCategories } from '../model/list-categories.model';
import { MovieDetails } from '../model/movie-details.model';

export const moviesFeatureKey = 'movies';

export interface MoviesState extends EntityState<ListMovies> {
  // additional entities state properties
  message: ListMovies[];
  categoryMovies: ListMovies[];
  categories: ListCategories[];
  movieDetails: MovieDetails;
  error: string;
}

export const adapter: EntityAdapter<ListMovies> = createEntityAdapter<ListMovies>();

export const initialState: MoviesState = adapter.getInitialState({
  // additional entity state properties
  message: undefined,
  categoryMovies: undefined,
  categories: undefined,
  movieDetails: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(moviesActions.loadMoviesSuccess,
    (state, action) => {
      return {
        ...state,
        message: action.message
      };
    }
  ),
  on(moviesActions.loadMovieSuccess,
    (state, action) => {
      return {
        ...state,
        movieDetails: action.message
      };
    }
  ),
  on(moviesActions.loadCategoriesSuccess,
    (state, action) => {
      return {
        ...state,
        categories: action.message
      }
  }),
  on(moviesActions.loadMovieByCategoryIdSuccess,
    (state, action) => {
      return {
        ...state,
        categoryMovies: action.message
      };
    }
  ),
  on(moviesActions.addMovie,
    (state, action) => adapter.addOne(action.data, state)),
  on(moviesActions.addMovieFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(moviesActions.deleteMovieSuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(moviesActions.deleteMovieFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      }
  }),
  on(moviesActions.updateMovie,
    (state, action) => adapter.updateOne(action.data, state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
