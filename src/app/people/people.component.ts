import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
	peoples;
	count = 1;
	totalPeopleCount;
	loading = true;
	constructor(private commonService: CommonService) { }

	onClick(){
		this.loading = true;
		this.count < 9 ? this.count++ : 1;
		this.loadPeople('people/?page='+this.count);
	}

	loadPeople(people){
		console.log('loadPeople', people);
		this.commonService.get(people).subscribe((people) => {
			this.peoples = people.results;
			this.totalPeopleCount = people.count;
			this.loading = false;
			console.log('people', people);
		});
	}

	ngOnInit() {
		this.loadPeople('people/');
	}
}
