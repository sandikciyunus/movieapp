import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:Category[]=[]
  selectedCategory:Category=null;
  displayAll:boolean=true;
  categoryService:CategoryService;
  constructor(private http:HttpClient) { 
     this.categoryService=new CategoryService(this.http);
  }


  ngOnInit(): void {
    this.categoryService.getList().subscribe(p=>{
      this.categories=p;
    })
  }
  selectCategory(category?:Category){
    if(category){
      this.selectedCategory=category;
      this.displayAll=false;
    }else{
      this.displayAll=true;
    }
   
  }


}
