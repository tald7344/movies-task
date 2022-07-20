import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { interval, Observable, Subject, Subscription } from 'rxjs';
import * as movieActions from '../../store/movies.actions';
import * as moviesSelector from '../../store/movies.selector';
import { MoviesState } from '../../store/movies.reducer';
import { ListMovies } from '../../model/list-movies.model';
import { AdminConfig } from 'src/app/pages/AdminConfig';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies$: Observable<ListMovies[]>;
  baseUrl = AdminConfig.sourceAPI;
  isDeleted: boolean;

  constructor(private store: Store<MoviesState>) { }

  ngOnInit(): void {
    this.store.dispatch(movieActions.loadMovies());
    this.getAllMovies();
  }

  getAllMovies() {
    this.movies$ = this.store.select(moviesSelector.getListMoviesSelector);
  }

  delete(movieId: number) {
    if (confirm('Are you sure you want to delete this Movie ?')) {
      this.store.dispatch(movieActions.deleteMovie({id: movieId}));
    }
  }

}
