import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  apiKey : string = "api_key=5377e321f50cdc3fdf1e7eb722d0c35c"
  apiURL : string = "https://api.themoviedb.org/3/movie/"
 
  getMovie(name: string){
     return this.http.get<any>(this.apiURL+name+this.apiKey+'&language=en-US&page=1')
  }
  
  getMovieDetails(data: any){
    
    return this.http.get(`https://api.themoviedb.org/3/movie/${data}?api_key=5377e321f50cdc3fdf1e7eb722d0c35c&language=en-US`)
    
  }

  getMovieCasts(data: any){
    return this.http.get(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=5377e321f50cdc3fdf1e7eb722d0c35c&language=en-US`)
  }

}
