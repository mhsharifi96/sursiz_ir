import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/service/home.service';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homehttp:HomeService) { }

  ngOnInit(): void {
    this.getTwits()
  }

  getTwits(){
    this.homehttp.fetchtwits().subscribe(
      data =>{
        console.log('twits contains : ',data)
      }
    )
  }



}
