import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film/film.component';
import {FilmsService} from './films.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import { FilmPageComponent } from './film-page/film-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule} from '@angular/material';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetAppComponent } from './get-app/get-app.component';
import { AboutUsComponent } from './about-us/about-us.component';

let routs = [
  {path: '', component: HomePageComponent},
  {path: 'contacts', component: ContactsPageComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'app', component: GetAppComponent},
  {path: ':id', component: FilmPageComponent},
  {path: '**', component: NotFoundPageComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    FilmComponent,
    HomePageComponent,
    ContactsPageComponent,
    NotFoundPageComponent,
    FilmPageComponent,
    GetAppComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routs),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
