import { Movie } from "./movie";

export class MovieRepository{
    private movies:Movie[];

    constructor(){
        this.movies=[
    {id:1,Title:"Test 1",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusantium id dolores, eaque corporis consequuntur, possimus, incidunt esse recusandae nam amet mollitia suscipit aliquid laborum voluptates iure maxime ducimus dolorem?   ",Image:"1.jpeg",IsPopular:false,DatePublished:new Date(2021,11,12)},
    {id:2,Title:"Test 2",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusantium id dolores, eaque corporis consequuntur, possimus, incidunt esse recusandae nam amet mollitia suscipit aliquid laborum voluptates iure maxime ducimus dolorem?",Image:"2.jpeg",IsPopular:true,DatePublished:new Date(2021,10,4)},
    {id:3,Title:"Test 3",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusantium id dolores, eaque corporis consequuntur, possimus, incidunt esse recusandae nam amet mollitia suscipit aliquid laborum voluptates iure maxime ducimus dolorem?",Image:"3.jpeg",IsPopular:false,DatePublished:new Date(2021,9,10)},
    {id:4,Title:"Test 4",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusantium id dolores, eaque corporis consequuntur, possimus, incidunt esse recusandae nam amet mollitia suscipit aliquid laborum voluptates iure maxime ducimus dolorem? ",Image:"4.jpeg",IsPopular:true,DatePublished:new Date(2021,8,6)},
    {id:5,Title:"Test 5",Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius accusantium id dolores, eaque corporis consequuntur, possimus, incidunt esse recusandae nam amet mollitia suscipit aliquid laborum voluptates iure maxime ducimus dolorem?",Image:"5.jpeg",IsPopular:true,DatePublished:new Date(2021,7,8)}
        ];
    }
    
    getMovies():Movie[]{
        return this.movies;
      }
    
      getMovieById(id:number):Movie{
        return this.movies.find(p=>p.id==id);
      }

      getPopularMovies():Movie[]{
        return this.movies.filter(p=>p.IsPopular==true);
      }
    
}