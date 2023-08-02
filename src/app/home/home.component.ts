import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies:any[]=[];
  trendingTv:any[]=[];
  trendingPeople:any[]=[];
  imagePath : string ="https://image.tmdb.org/t/p/w500/";
  term :string = '';
  constructor(private _MovieService:MovieService) { }

  ngOnInit(): void {
   
    this._MovieService.getTrending("movie").subscribe({
      next:(data)=>  this.trendingMovies = data.results.slice(0,10)  
    })
    this._MovieService.getTrending("tv").subscribe({
      next:(data)=>  this.trendingTv = data.results.slice(0,10)  
    })
    this._MovieService.getTrending("person").subscribe({
      next:(data)=>  this.trendingPeople = data.results.slice(0,10)  
    })
  }

}
