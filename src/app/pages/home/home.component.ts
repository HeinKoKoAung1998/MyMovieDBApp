import { Component } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  movieListPopular:any = []
  movieListNowPlaying:any = []
  movieListTopRated:any = []
  movieListUpcoming:any = []

  constructor(public mservice: MovieApiServiceService){}

  ngOnInit(): void {
    this.getNowPlayingMovie()
    this.getPopularMovie()
    this.getTopRatedMovie()
    this.getUpcomingMovie()
  }

  getPopularMovie(){
    this.mservice.getMovie("popular?").subscribe((Response : any) =>{
      this.movieListPopular = Response.results
       console.log(this.movieListPopular)
    })
  }

  getNowPlayingMovie(){
    this.mservice.getMovie("now_playing?").subscribe((Response : any) =>{
      this.movieListNowPlaying = Response.results
       console.log(this.movieListNowPlaying)
    })
  }
  getTopRatedMovie(){
    this.mservice.getMovie("top_rated?").subscribe((Response: any) =>{
      
      this.movieListTopRated = Response.results

      console.log(this.movieListTopRated) 
    })
  }

  getUpcomingMovie(){
    this.mservice.getMovie("upcoming?").subscribe((Response : any) =>{
    
      this.movieListUpcoming = Response.results
       console.log(this.movieListUpcoming)
       
    })
  }
}
