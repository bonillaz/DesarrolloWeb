import { Component, OnInit, Input } from '@angular/core';
import { Tweet } from 'src/app/model/Tweet';

@Component({
  selector: 'app-detalle-tweet',
  templateUrl: './detalle-tweet.component.html',
  styleUrls: ['./detalle-tweet.component.css']
})
export class DetalleTweetComponent implements OnInit {

  constructor() { 
    this.mySelectedTweet = {
      id: 1,
      autor: 'Zulay',
      texto: 'Prueba'
    };
  }

  @Input() mySelectedTweet: Tweet;

  ngOnInit() {
  }

}
