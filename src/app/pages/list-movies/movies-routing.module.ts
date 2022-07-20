import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { AllMoviesComponent } from './components/all-movies/all-movies.component';
import { CategoryMoviesComponent } from './components/category-movies/category-movies.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';
import { ListMoviesComponent } from './list-movies.component';


const routes: Routes = [
  { path: '', component: ListMoviesComponent },
  { path: 'all', component: AllMoviesComponent },
  { path: 'add', component: NewMovieComponent },
  { path: 'edit/:id', component: EditMovieComponent },
  { path: 'categories', component: AllCategoriesComponent },
  { path: 'categories/:id', component: CategoryMoviesComponent },
  { path: 'dashboard', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
