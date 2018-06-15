import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
//import { EventEmitter } from 'events';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  //inputs: ['isFavorite'] -- one way to set the input property
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  @Output('change') click = new EventEmitter();
  constructor() { }

  ngOnInit() { 
  }
  
  onClick(){
    this.isFavorite = !this.isFavorite;
    //this.change.emit(this.isFavorite); -- simply passing a boolean
    //passing an object 
    this.click.emit({newValue: this.isFavorite})
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}