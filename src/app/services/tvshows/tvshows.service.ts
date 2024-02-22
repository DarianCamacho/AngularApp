import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  constructor(private http: HttpClient) { }

  getTvshows() {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?page=1&api_key=abcf5c9a2adb75fa6a5a46dc05a38bf8');
  }

  getTvshowPage(page: number) {
    return this.http.get('https://api.themoviedb.org/3/discover/tv?page='+page+'&api_key=abcf5c9a2adb75fa6a5a46dc05a38bf8');
  }
}