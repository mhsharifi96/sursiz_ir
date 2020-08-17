import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var $: any;


@Component({
  selector: 'app-fancy-box',
  templateUrl: './fancy-box.component.html',
  styleUrls: ['./fancy-box.component.css']
})
export class FancyBoxComponent implements OnInit {
  @Input() image:string;
  baseUrl = environment.apiUrl;
  constructor() { }

  ngOnInit(): void {
    $(".fancy").fancybox();
  }

}



// fancybox on angular doc:  http://www.ng-guru.com/how-to-use-fancybox-in-angular-8-using-components/