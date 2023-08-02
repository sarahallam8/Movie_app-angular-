import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movieId:string ='';
  movieDetails:any;
  imagePath : string ="https://image.tmdb.org/t/p/w500/";
  constructor(private _ActivatedRoute:ActivatedRoute, private _MovieService:MovieService) { }

  ngOnInit(): void {
   this.movieId = this._ActivatedRoute.snapshot.params['id'];
   this._MovieService.getMovieDetails(this.movieId).subscribe({
    next:(Response)=> this.movieDetails = Response
   })
  }

}
