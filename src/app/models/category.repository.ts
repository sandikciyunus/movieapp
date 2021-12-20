import { Category } from "./category";

export class CategoryRepository{
    private categories:Category[];

    constructor(){
        this.categories=[
            {Id:1,Name:"Macera"},
            {Id:2,Name:"Romatik"},
            {Id:3,Name:"Bilim Kurgu"},
            {Id:4,Name:"Komedi"}
        ]
    }

    getCategories(){
        return this.categories;
    }
}