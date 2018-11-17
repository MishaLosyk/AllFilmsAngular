import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
films: any;
moreFilmsArr: any;
pages: any;
pageNum: any;
memory: any;
  constructor(private http: HttpClient) {
  this.films = [];
  this.moreFilmsArr = [];
  this.pages = 0;
  this.pageNum = 1;
  }

  GetFilmByQuery(query, pg) {
  let url = `https://www.omdbapi.com/?apikey=a40a4510&s=${query}&page=${pg}`;
  this.http.get(url).subscribe(response => {
    console.log(response);
    this.films = response['Search'];
    console.log(response['totalResults']);
    this.pages = response['totalResults'] / 10;
    console.log('its  ' + this.pages);

  } );
    this.memory = query;
    console.log('ALERT' + this.memory);
  }

  moreFilms(query, pg) {
  let url = `https://www.omdbapi.com/?apikey=a40a4510&s=${query}&page=${pg}`;
  this.http.get(url).subscribe(response => {
    this.moreFilmsArr = response['Search'];
    this.films = this.films.concat(this.moreFilmsArr);
  } );

  }


  GetFilmById(query) {
  let url = `https://www.omdbapi.com/?apikey=a40a4510&i=${query}`;
  return this.http.get(url);
  }

}


