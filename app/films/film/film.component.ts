import {Component, Input} from '@angular/core';
import {createInput} from '@angular/compiler/src/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
 @Input() title: string;
 @Input() poster: string;
 @Input() year: string;
 @Input() type: string;
}
