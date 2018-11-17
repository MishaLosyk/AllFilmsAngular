import { Component, OnInit } from '@angular/core';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent{
  fs;
  constructor(fs: FilmsService) {
  this.fs = fs;


  }
getFilms(s, n) {
    this.fs.GetFilmByQuery(s, n);
  console.log('#memory:' + this.fs.memory);


}

log(a) {
    console.log('memory are:' + a);
    console.log('pageNum:' + this.fs.pageNum);
}

moreFilms(s) {

    if(this.fs.pageNum < (this.fs.pages + 1))
    {this.fs.moreFilms(s, this.fs.pageNum);
      this.fs.pageNum++;
      }



}



}
