import { Component } from '@angular/core';
import {QUOTES} from './Mock';
import {QUOTE} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problem Set 5 by Kanye West';
  quotes = QUOTES;

}
