import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent{
  pageSizeOptions: any;
  value: String;
  constructor() {
    this.pageSizeOptions = [2, 4, 5];
  }

  test(e){
    console.log(e);
  }
  focus(){
    console.log('dsa')
  }


}

