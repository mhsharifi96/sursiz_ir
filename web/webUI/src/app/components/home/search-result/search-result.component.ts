import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  company: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {
    //   console.log(params.get());
    // });

    // console.log(this.router.snapshot.params.company); 
    this.router.params.subscribe((data:any)=>{
      console.log("man injam",data); // outputs: {slug: "angular"}
    }
  )
  }

}

