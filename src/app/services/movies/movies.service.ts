import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('https://api.themoviedb.org/4/list/1?page=1&api_key=5f2b5e0ae3a00a80c918135739ad8f3f');
  }

  getMoviePage(page: number) {
    return this.http.get('https://api.themoviedb.org/4/list/1?page='+page+'&api_key=5f2b5e0ae3a00a80c918135739ad8f3f');
  }
}