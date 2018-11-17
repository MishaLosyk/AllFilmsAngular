import { Component } from '@angular/core';
import {ActivatedRoute, Router, UrlSegment} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'films';
  line: boolean;
  line2: boolean;
  line3: boolean;

  constructor (private route: ActivatedRoute) {
    this.line = true;
  }

 resetLine() {
   this.line = false;
   this.line2 = false;
   this.line3 = false;
 }


}
