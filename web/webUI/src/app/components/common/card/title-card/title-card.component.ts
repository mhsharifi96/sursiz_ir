import { Component, OnInit,Input } from '@angular/core';
import * as moment from 'jalali-moment';
@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit {
  @Input() twit:any

  constructor() { }

  ngOnInit(): void {}

  getJalaliDate(date) {    
    let jalaliDate = moment(date).locale('fa').format('YYYY/MM/D-hh:mm'); // 1367/11/4
    
    // this.farsiDate = date1;
    return jalaliDate
  }

  
// TODO : use Pipe

}
