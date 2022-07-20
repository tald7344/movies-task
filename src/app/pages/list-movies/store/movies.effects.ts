import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as moviesActions from './movies.actions';
import {catchError, concatMap, exhaustMap, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { MoviesState } from './movies.reducer';
import { ToastrService } from 'ngx-toastr';



@Injectable()
export class MoviesEffects {

  constructor(private actions$: Actions,
              private store: Store<MoviesState>,
              private router: Router,
              private toasterService: ToastrService,
              private activatedRouter: ActivatedRoute,
              private moviesService: MoviesService) {}

  loadListMoviesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.loadMovies),
    switchMap(() => this.moviesService.getListMovies()
      .pipe(
        map(response => moviesActions.loadMoviesSuccess({message: response.message})),
        catchError(error => of(moviesActions.loadMoviesFailure({error})))
      ))
  ));

  loadListCategoriesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.loadCategories),
    switchMap(() => this.moviesService.getMoviesCategories()
      .pipe(
        map(response => moviesActions.loadCategoriesSuccess({message: response.message})),
        catchError(error => of(moviesActions.loadCategoriesFailure({error})))
      ))
  ));

  loadCategoryMovies$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.loadMovieByCategoryId),
    switchMap(action => this.moviesService.getMoviesByCategoryId(+action.id)
      .pipe(
        map(response => {
          return moviesActions.loadMovieByCategoryIdSuccess({message: response.message});
        }),
        catchError(error => of(moviesActions.loadMovieByCategoryIdFailure(error)))
      ))
  ));

  loadMovie$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.loadMovie),
    switchMap(action => this.moviesService.getMovieDetails(+action.id)
      .pipe(
        map(response => {
          return moviesActions.loadMovieSuccess({message: response.message});
        }),
        catchError(error => of(moviesActions.loadMovieFailure(error)))
      ))
  ));

  newMovieEffect$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.addMovie),
    exhaustMap(action => this.moviesService.newMovie(+action.data)
      .pipe(
        map(response => {
          this.toasterService.success('Your Movie Successfully Created');
          return moviesActions.addMovieSuccess()
        }),
        catchError(error => of(moviesActions.addMovieFailure({error})))
      ))
  ));

  redirectNewMovieEffect$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.addMovieSuccess),
    tap(res => this.router.navigate(['../'], {relativeTo: this.activatedRouter}))
  ), { dispatch: false });
  
  
  deleteMovie$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.deleteMovie),
    mergeMap(action => this.moviesService.deleteMovie(action.id)
    .pipe(
      map(response => {
        this.toasterService.success('Your Movie Successfully Deleted');
        this.store.dispatch(moviesActions.loadMovies());
        return moviesActions.deleteMovieSuccess({ id: action.id });
      }),
      catchError(error => of(moviesActions.deleteMovieFailure({error})))
    ))
  ));

  updateMovie$ = createEffect(() => this.actions$.pipe(
    ofType(moviesActions.updateMovie),
    concatMap(action => this.moviesService.updateMovie(
        +action.data.id,
        action.data.changes
      )
    ),
    tap(res => {
      this.toasterService.success('Your Movie Successfully Updated');
      return this.router.navigate(['/all']);
    })
    ), { dispatch: false }   // We Must Use Dispatch To False To Work Correctly
  );
}
