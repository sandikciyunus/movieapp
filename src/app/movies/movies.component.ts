import { taggedTemplate } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchText: string;
  message="Film bulunamadı.";
  title="Film Listesi";
  movies:Movie[]=[];
  popularMovies:Movie[]=[];
  movieRepository:MovieRepository;

  constructor() { 
    this.movieRepository=new MovieRepository();
    this.movies=this.movieRepository.getMovies();
    this.popularMovies=this.movieRepository.getPopularMovies();
  }

  ngOnInit(): void {
  }


}
