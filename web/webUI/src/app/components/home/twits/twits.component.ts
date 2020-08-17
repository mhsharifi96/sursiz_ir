import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { error } from '@angular/compiler/src/util';
HomeService
@Component({
  selector: 'app-twits',
  templateUrl: './twits.component.html',
  styleUrls: ['./twits.component.css']
})
export class TwitsComponent implements OnInit {

  pageTwit = [] ;
  countAllTwit :number =0;
  nextPage:string='';
  previousPage :string=''
  currentPage :number=1;
  totalPages : number=20;
  p: number = 1;
  constructor(private router:ActivatedRoute,private homeService : HomeService,
    private route:Router) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(x => {
      if (x.page == null)
        console.log(1);
      else
        console.log(x.page)
      
      this.loadPage(x.page ||1)
    }
    )

  }


pageChanged(e){
  this.route.navigate(['/signals'], { queryParams: { page: e } });
}

  private loadPage(page) {
    this.p = page
    // get page of items from api
    console.log("page ::::::",page)
    this.homeService.fetchtwits(page).subscribe(data =>{

      this.pageTwit =data['results']
      this.countAllTwit = Number(data['count'])
      this.nextPage = data['next']
      this.previousPage = data['previous']
      this.currentPage = Number(page)
      

      console.log(data)
    },(error)=>console.log(error)
    )
    
}

}
