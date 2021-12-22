import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from '../models/category';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';
import { ImageValidator } from '../validators/image.validator';

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

  movieForm=new FormGroup({
      Title:new FormControl("",[Validators.required,Validators.minLength(5)]),
  Description:new FormControl("",[Validators.required]),
  Image:new FormControl("",[Validators.required,ImageValidator.isValidExtention]),
  categoryId:new FormControl("-1",[Validators.required])
  })

  get title(){
    return this.movieForm.get("Title");
  }


 
  createMovie(){
     const movie={
      id: 0,
      Title:this.movieForm.value.Title,
      Description:this.movieForm.value.Description,
      Image:this.movieForm.value.Image,
      IsPopular: false,
      DatePublished: new Date(),
      CategoryId:Number(this.movieForm.value.categoryId)
     }
     this.movieService.createMovie(movie).subscribe(p=>{
       window.location.href="/";
     })
    
  }



  clearForm(){
    this.movieForm.patchValue({
      Title:"",
      Description:"",
      Image:"",
      categoryId:""
    })
  }

}
