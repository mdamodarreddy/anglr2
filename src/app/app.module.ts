import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoadersCssModule } from 'angular2-loaders-css';
import * as _ from '@types/lodash';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Routing } from './app.routes';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

//services
import { CommonService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    LoadersCssModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
