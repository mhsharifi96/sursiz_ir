import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'jalali-moment';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {
  farsiDate
  @Input() twit: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  getJalaliDate(date) {    
    let jalaliDate = moment(date).locale('fa').format('YYYY/MM/D-hh:mm'); // 1367/11/4
    
    // this.farsiDate = date1;
    return jalaliDate
  }

}
