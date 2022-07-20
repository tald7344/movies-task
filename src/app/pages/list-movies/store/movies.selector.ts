import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MoviesState, moviesFeatureKey, selectAll} from './movies.reducer';

const listMoviesFeatureState = createFeatureSelector(moviesFeatureKey);

export const getListMoviesSelector = createSelector(listMoviesFeatureState, (state: MoviesState) => state.message);

export const getListCategoiresSelector = createSelector(listMoviesFeatureState, (state: MoviesState) => state.categories);

export const getMoviesByCategoryIdSelector = createSelector(listMoviesFeatureState, (state: MoviesState) => state.categoryMovies);

export const getMovieDetailsSelector = createSelector(listMoviesFeatureState, (state: MoviesState) => state.movieDetails);

export const getListMoviesErrorSelector = createSelector(listMoviesFeatureState, (state: MoviesState) => state.error);
