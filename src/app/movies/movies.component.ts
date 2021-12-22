import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../models/movie';
import { AlertifyService } from '../services/alertify.service';
import { MovieService } from '../services/movie.service';

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
  id:number;
  errorMessage:any;
  alertifyService:AlertifyService;
  movieService:MovieService;
  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute) { 
    this.movieService=new MovieService(this.http);
    this.alertifyService=new AlertifyService();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p=>{
      this.movieService.getList(p["id"]).subscribe(data=>{
        this.movies=data
      },error=>{
        this.errorMessage=error.message
        console.log(this.errorMessage);
      });
    });
  }
  addToList(event:any,movie:Movie){
   if(event.target.classList.contains("btn-primary")){
    event.target.innerText="Listeden Çıkar";
     event.target.classList.remove("btn-primary");
     event.target.classList.add("btn-danger");
     this.alertifyService.success(movie.Title+" Listeye Eklendi");
   }else{
    event.target.innerText="Listeye Ekle";
    event.target.classList.add("btn-primary");
    event.target.classList.remove("btn-danger");
    this.alertifyService.error(movie.Title+" Listeden Çıkaırldı");
   }
  }

 deleteMovie(id:number) {
   var result=confirm("Silmek istediğinize emin misiniz?");
   if(result){
      this.movieService.deleteMovie(id).subscribe(p=>{
    window.location.reload();
  })
   }
   else{
     alert("Silme işlemi iptal edildi");
   }
 
}

}


