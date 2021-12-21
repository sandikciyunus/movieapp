import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie} from '../models/movie';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http:HttpClient) { }

  getList(categoryId?:number):Observable<Movie[]>{
    if(categoryId){
      return this.http.get<Movie[]>("http://localhost:3000/movies?categoryId="+categoryId)
    }
    return this.http.get<Movie[]>("http://localhost:3000/movies")
  }

  getMovieDetail(id?:number){
    return this.http.get<Movie>("http://localhost:3000/movies/"+id)
  }

  createMovie(movie:any):Observable<Movie>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
    });
    return this.http.post<Movie>("http://localhost:3000/movies",movie,{headers:httpHeaders })
  }
}
