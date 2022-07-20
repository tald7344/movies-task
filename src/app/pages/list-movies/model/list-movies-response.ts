import { ListMovies } from "./list-movies.model";

export interface ListMoviesResponse {
  status: string;
  message: ListMovies[];
}
