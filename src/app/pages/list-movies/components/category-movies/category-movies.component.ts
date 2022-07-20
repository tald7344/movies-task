import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as movieActions from '../../store/movies.actions';
import * as moviesSelector from '../../store/movies.selector';
import { MoviesState } from '../../store/movies.reducer';
import { ListMovies } from '../../model/list-movies.model';
import { AdminConfig } from 'src/app/pages/AdminConfig';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-category-movies',
  templateUrl: './category-movies.component.html',
  styleUrls: ['./category-movies.component.scss']
})
export class CategoryMoviesComponent implements OnInit {
  movies$: Observable<ListMovies[]>;
  categoryId: number;
  baseUrl = AdminConfig.sourceAPI;
  isDeleted: boolean;

  constructor(private store: Store<MoviesState>,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.categoryId = +params.get('id');
        this.store.dispatch(movieActions.loadMovieByCategoryId({id: this.categoryId}));
      });
    this.getAllMoviesForThisCategory();
  }

  getAllMoviesForThisCategory() {
    this.movies$ = this.store.select(moviesSelector.getMoviesByCategoryIdSelector);
  }


}
