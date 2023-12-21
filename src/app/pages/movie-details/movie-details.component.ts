import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  constructor(private Mservice: MovieApiServiceService,private AR: ActivatedRoute){}
  getMovieDetailResults: any = []
  getMovieCastsResult: any = []

  ngOnInit(): void {
    let getID = this.AR.snapshot.paramMap.get('id');
    this.getMovie(getID)
    this.getMovieCasts(getID)
  }

  
  getMovie(id: any){
    this.Mservice.getMovieDetails(id).subscribe((res)=>{
      console.log(res)
      this.getMovieDetailResults = res;  
    })
  }
  getMovieCasts(id: any){
    this.Mservice.getMovieCasts(id).subscribe((res:any)=>{
      console.log(res)
      this.getMovieCastsResult = res.cast
      console.log(this.getMovieCastsResult)
    })
  }

}
