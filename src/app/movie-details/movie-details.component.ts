import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieService:MovieService;
  movie:Movie;
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute) { 
    this.movieService=new MovieService(this.http);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p=>{
      this.movieService.getMovieDetail(p["id"]).subscribe(p=>{
        console.log(p);
        this.movie=p;
      })
    });
   
  }

}
