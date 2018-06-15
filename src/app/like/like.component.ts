import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-like',
  template: `
  <span class = "glyphicon"
    [class.glyphicon-heart] = "isLiked"
    [class.glyphicon-heart-empty] = "!isLiked" 
    (click)= "onClick()">
    </span>
  {{ likesCount }}
`
  styleUrls: ['./like.component.css']
  
})
export class LikeComponent implements OnInit {
  isLiked: boolean;
  likesCount = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.likesCount = !this.isLiked? (this.likesCount +1):(this.likesCount-1);
    this.isLiked = !this.isLiked;
    //console.log (this.likesCount);
  }
}
