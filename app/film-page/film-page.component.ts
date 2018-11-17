import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FilmsService} from '../films.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent{
  title: string;
  year: string;
  genre: string;
  actors: any;
  poster: string;
  director: string;
  writer: string;
  country: string;
  awards: string;
  plot: string;
  imdbRating: string;
  BoxOffice: string;
  word: boolean;
  Metascore: String;

  constructor(
              private route: ActivatedRoute,
              fs: FilmsService,

              private router: Router)
{
    this.route.params.subscribe(params => {
     fs.GetFilmById(params['id']).subscribe(response => {
       let rest = response;
       console.log(rest['Title']);
       this.title = rest['Title'];
       this.year = rest['Year'];
       this.genre = rest['Genre'];
       this.actors = rest['Actors'];
       this.poster = rest['Poster'];
       this.director = rest['Director'];
       this.writer = rest['Writer'];
       this.country = rest['Country'];
       this.awards = rest['Awards'];
       this.plot = rest['Plot'];
       this.imdbRating = rest['imdbRating'];
       this.BoxOffice = rest['BoxOffice'];
       this.Metascore = rest['Metascore'];
     });
    });
}

check(office) {
    if (office == 'N/A' || office == undefined) {
      this.word = false;
    } else {
      this.word = true;
    }
    return this.word;
}
comeBack(){
  this.router.navigate(['/'], { queryParamsHandling: 'preserve' });
}

}
