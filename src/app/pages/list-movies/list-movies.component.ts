import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {forkJoin, Observable, Subscription} from 'rxjs';
import { FooterComponent } from 'src/app/@theme/components';
import { AppState } from 'src/app/@theme/store/app-state';
import { setLoadSpinner } from 'src/app/@theme/store/shared/shared.actions';
import {MoviesService} from './services/movies.service';
import {MoviesState} from './store/movies.reducer';
import {loadMovies} from './store/movies.actions';
import {getListCategoiresSelector, getListMoviesSelector} from './store/movies.selector';
import {ListMovies} from './model/list-movies.model';
import { AdminConfig } from '../AdminConfig';
import { ListCategories } from './model/list-categories.model';


@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  providers: [ FooterComponent ]
})
export class ListMoviesComponent implements OnInit {
  movies$: Observable<ListMovies[]>;
  baseUrl = AdminConfig.sourceAPI;

  constructor(private store: Store<MoviesState>) {
  }

  ngOnInit() {
    this.store.dispatch(loadMovies());
    this.getListMovies();
  }

  getListMovies() {
    this.movies$ = this.store.select(getListMoviesSelector);
  }

}
