import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  actions;

  constructor(private router:Router) { }

  onButtonClick() {
  	this.actions = 'Back To Home';
  }

  ngOnInit() {
  	this.router.navigate(['/home']);
  }
}
