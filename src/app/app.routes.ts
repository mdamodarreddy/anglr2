import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
 
const routes: Routes = [
	{path: 'home', component: HomeComponent},
	{path: 'films', component: FilmsComponent},
	{path: 'peoples', component: PeopleComponent},
	{path: 'planets', component: PlanetsComponent},
	{path: 'species', component: SpeciesComponent},
	{path: 'starships', component: StarshipsComponent},
	{path: 'vehicles', component: VehiclesComponent}
]

export const Routing = RouterModule.forRoot(routes);