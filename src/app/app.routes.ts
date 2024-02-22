import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { TvshowsComponent } from './tvshows/tvshows.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },  
  { path: 'movies', component: MoviesComponent },  
  { path: 'tvshows', component: TvshowsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];