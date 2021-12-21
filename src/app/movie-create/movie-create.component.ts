import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {

  categories:Category[];
  categoryService:CategoryService;
  movieService:MovieService;
  movie:Movie;
  model:any={};
  alertifService:AlertifyService;
  constructor(private http:HttpClient) { 
    this.categoryService=new CategoryService(http);
    this.movieService=new MovieService(http);
    this.alertifService=new AlertifyService();
  }

  ngOnInit(): void {
    this.categoryService.getList().subscribe(p=>{
      this.categories=p
    })
  }
  createMovie(form:NgForm){
    console.log(form);
     /*const movie={
      Title:this.model.Title,
      Description:this.model.Description,
      Image:this.model.Image,
      categoryId:Number(this.model.categoryId)
     }
     this.movieService.createMovie(movie).subscribe(p=>{
       window.location.href="/";
     })*/
     
  }

  log(value:any){
    console.log(value);
  }

}
