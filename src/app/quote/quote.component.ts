import {Component, OnInit, Output} from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import {HttpClient} from "@angular/common/http";
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

//http returns an Observable, not a Promise
//
export class UsersComponent implements OnInit {
  WestQuote = new FormControl('');
  users: any;
  httpClient: any;
//@Output()
  subListMessage: string = "This is not a message";

  constructor(private http: HttpClient ) {

    http.get('http://localhost:3000/api/db')
      .subscribe(
        data => this.users = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );
    this.httpClient = http;
    //this.subListMessage = "This is not a message";

  }

  ngOnInit() {
    this.httpClient.get('http://localhost:3000/api/db')
      .subscribe(
        data => this.users = data,
        err => console.log(`Error: ${err}`),
        () => console.log(`Completed request`)
      );

  }

  postData() {
    this.httpClient.post()
  }

}
