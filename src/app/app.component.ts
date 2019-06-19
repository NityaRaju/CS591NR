import {Component, OnInit, Output} from '@angular/core';
import {QUOTE} from './quote';
//import {QUOTES} from './Mock';
//import {QUOTE} from './quote';

import {HttpClient, HttpHeaders } from '@angular/common/http';
import {w} from '../Config/PS6fin'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`h2 {
    color: #ff94db
  }` ]

})
export class AppComponent implements OnInit {
  title = 'Problem Set 6 by Kanye West';
  quotes: QUOTE;
  httpClient: any;
  requestData
  headers= new HttpHeaders().set("Type","application/json");


  searchQuote(){
    this.httpClient.get(w.url,{
      headers: new HttpHeaders()
      .set('word',this.word)
    }).subscribe(data =>{
      this.quotes = data.quote
      this.requestData = data.req
    });
  }

constructor (private http: HttpClient){
this.httpClient = http;
}
ngOnInit(){}
}
