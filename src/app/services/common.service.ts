import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CommonService {

  constructor(private http:Http) { }

  get(restApi){
  	console.log('restApi', restApi);
  	let list = this.http.get(`https://swapi.co/api/${restApi}`)
  	.map((res:Response) => {
  		return res.json();
  	})

  	return list;
  }

}
