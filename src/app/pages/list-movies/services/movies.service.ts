import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminConfig} from '../../AdminConfig';
import {ListMoviesResponse} from '../model/list-movies-response';
import { ListMovies } from '../model/list-movies.model';
import { MovieDetails } from '../model/movie-details.model';
import { MovieDetailsResponse } from '../model/movie-details-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getListMovies(): Observable<ListMoviesResponse> {
    return this.httpClient.get<ListMoviesResponse>(AdminConfig.moviesAPI);
  }

  getMoviesCategories(): Observable<any> {
    return this.httpClient.get<any>(AdminConfig.moviesCategoriesAPI);
  }

  getMoviesByCategoryId(categoryId: number): Observable<ListMoviesResponse> {
    return this.httpClient.get<ListMoviesResponse>(`${AdminConfig.categoryMoviesAPI}/${categoryId}`);
  }

  getMovieDetails(movieId: number): Observable<MovieDetailsResponse> {
    return this.httpClient.get<MovieDetailsResponse>(`${AdminConfig.moviesAPI}/${movieId}`);
  }

  newMovie(data): Observable<ListMovies> {
    return this.httpClient.post<ListMovies>(AdminConfig.moviesAPI, data);
  }
  
  updateMovie(movieId: number, data: any): Observable<any> {
    return this.httpClient.put(
      `${AdminConfig.moviesAPI}/${movieId}`,
      JSON.stringify(data)
    );
  }

  deleteMovie(id: number): Observable<any> {
    return this.httpClient.delete(
      `${AdminConfig.moviesAPI}/${id}`
    );
  }

  //Upload Image
  public uploadImage(image: File): Observable<string> {
    const formData = new FormData();
    formData.append('image', image);
    return this.httpClient.post<string>(AdminConfig.generalUploadAPI, formData);
  }
}
