import { NgModule } from '@angular/core';
import { ThemeModule } from 'src/app/@theme/theme.module';

import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromListMovies from './store/movies.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ListMoviesComponent } from './list-movies.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { MoviesEffects } from './store/movies.effects';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';

@NgModule({
  declarations: [
    AllMoviesComponent,
    ListMoviesComponent,
    NewMovieComponent,
    EditMovieComponent,
    AllCategoriesComponent,
    CategoryMoviesComponent
  ],
  imports: [
    ThemeModule,
    MoviesRoutingModule,
    StoreModule.forFeature(fromListMovies.moviesFeatureKey, fromListMovies.reducer),
    EffectsModule.forFeature([MoviesEffects])
  ]
})
export class MoviesModule { }
