import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as movieActions from '../../store/movies.actions';
import * as moviesSelector from '../../store/movies.selector';
import { MoviesState } from '../../store/movies.reducer';
import { ListMovies } from '../../model/list-movies.model';


@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  categories$: Observable<ListMovies[]>;
  isDeleted: boolean;

  constructor(private store: Store<MoviesState>) { }

  ngOnInit(): void {
    this.store.dispatch(movieActions.loadCategories());
    this.getAllCategories();
  }

  getAllCategories() {
    this.categories$ = this.store.select(moviesSelector.getListCategoiresSelector);
  }

}
