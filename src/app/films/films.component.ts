import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
	filmsList;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
  	console.log('FilmsComponent');
  	this.commonService.get('films').subscribe((filmList) => {                
        this.filmsList = filmList.results.sort((a,b) => {                	
        	return a.episode_id - b.episode_id;
        });
    });
  }

}
