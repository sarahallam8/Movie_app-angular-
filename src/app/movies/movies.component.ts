import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private _MovieService:MovieService) { }
  pages:number []= [];
  pageNumber:number = 5;
  term :string = '';
  trendingMovies:any[]=[];
  imagePath : string ="https://image.tmdb.org/t/p/w500/";



    ngOnInit(): void {
      this.pages = new Array(this.pageNumber).fill('').map((x,i)=>i+1)
      this._MovieService.getMoviePagination(1).subscribe({
        next:(reponse)=> this.trendingMovies = reponse.results
      })
  }
  test(numberPage:number){
    this._MovieService.getMoviePagination(numberPage).subscribe({
      next:(reponse)=> this.trendingMovies = reponse.results
  })

  }
}