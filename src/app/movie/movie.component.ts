import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  template:  `
  <input type ="text" [(ngModel)] ="title">
  <br>
  {{ title | titleCase }}  
  `
})
export class MovieComponent implements OnInit {
  title: string;
  constructor() { }

  ngOnInit() {
  }

}
