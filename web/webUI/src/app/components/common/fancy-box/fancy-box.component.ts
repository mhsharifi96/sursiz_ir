import { Component, OnInit } from '@angular/core';

declare var $: any;


@Component({
  selector: 'app-fancy-box',
  templateUrl: './fancy-box.component.html',
  styleUrls: ['./fancy-box.component.css']
})
export class FancyBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(".fancy").fancybox();
  }

}
