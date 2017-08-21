import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
	planets = [];
	loading = true;
	options = [10,25,50];
	planetsData;
	data;
	listSelect = 10;
	count = 10;
	constructor(private commonService: CommonService) { }

	loadPlanets(planets){
		this.commonService.get(planets).subscribe(planets => {
			this.planets.push(planets.results);
			let next = planets.next;
			if(next){
				let uri = next.substr(next.length - 15);
				this.loadPlanets(uri)
			} else {
				this.loading = false;
				this.data = _.flattenDeep(this.planets);
				this.onOptionChange();
				console.log('this.planets >> ', this.planets);
			}			
		})
	}

	onOptionChange(){
		this.count = this.listSelect; 
		this.planetsData = _.take(this.data, this.listSelect);
	}

	onForward() {
		console.log('onForward >> ', this.count);
		let count = this.count;
		let incrementCount = count + count;
		this.planetsData = _.filter(this.data, function(data, index) {
			console.log('index', index, count);
			return ((index + 1) > count && index < incrementCount);
		});
		//this.count = incrementCount;
		console.log('onForward >> this.planetsData', this.planetsData, this.planets);
		//this.planetsData = _.take(this.data, this.count);
	}

	onBackward() {
		console.log('onBackward << ');
		this.planetsData = _.take(this.data, this.listSelect);
	}

	ngOnInit() {
		this.loadPlanets('planets/');
	}

}
