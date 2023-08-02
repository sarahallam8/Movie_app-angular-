import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient) { }

  getTrending(mediaType:string):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=75218f53d97edde7d5c8a44648e29db4`)
  }
  getMovieDetails(id:string):Observable<any>
  {
   return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=75218f53d97edde7d5c8a44648e29db4`) 
  }
  getMoviePagination( pageNumber:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/discover/movie?api_key=75218f53d97edde7d5c8a44648e29db4&language=en-US&page=${pageNumber}`)
  }
}
