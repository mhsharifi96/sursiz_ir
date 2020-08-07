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



// fancybox on angular doc:  http://www.ng-guru.com/how-to-use-fancybox-in-angular-8-using-components/