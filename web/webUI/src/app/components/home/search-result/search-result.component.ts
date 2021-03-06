import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/service/home.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  company: string;
  twits =[];
  twitCount:number = 1;
  next_page :string="";
  number_next_page :number=1;
  previous_page;
  spinnerScroll= true;
  allTwit=[];

  constructor(private router: ActivatedRoute,private homeService:HomeService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    // this.router.queryParams.subscribe(params => {
    //   console.log(params.get());
    // });

    // console.log(this.router.snapshot.params.company); 
    this.router.params.subscribe((data:any)=>{
      console.log("man injam",data); // outputs: {slug: "angular"}
      this.homeService.SearchOnDescription(data.description).subscribe(
        data =>{
          console.log('search on description data : ',data)
          this.allTwit = this.allTwit.concat(data['results'])
          this.twitCount = data['count']
          this.next_page = data['next']
          this.previous_page = data['previous']
          this.spinnerScroll = true;
          this.spinner.hide()

        },(error)=>console.log(error)
      )
    })
    // this.getTwits()

    
  }

  getTwits(number_next_page=1){
    this.homeService.fetchtwits(number_next_page.toString()).subscribe(
      data =>{
        console.log('twits contains : ',data['results'])
        console.log('next page :',data['next'])
        console.log('previous page : ',data['previous'])
        // this.next_page = data['next']
        // this.previous_page = data['previous']
        // this.allTwit = this.allTwit.concat(data['results'])
        this.spinnerScroll = true;
        this.spinner.hide()
        
        console.log('length : ',this.allTwit.length)
      }
    )
  }



  // onScroll() {
  //   console.log('scrolled!!');
  //   this.spinner.show()
  //   if (this.next_page && this.spinnerScroll){
  //     this.number_next_page +=1
  //     this.spinnerScroll=false;
  //     console.log('next page +1: ',this.number_next_page)
  //     this.getTwits(this.number_next_page)
      

  //   }
  // }

  onScroll(){
    console.log("************ OnScroll **************")
    this.spinner.show()
    // alert('در حال لود بیشتر')
    if(this.next_page)
      
      this.homeService.searchOnDescriptionpaginate(this.next_page).subscribe(
        data=>{
          this.allTwit = this.allTwit.concat(data['results'])
          this.next_page = data['next']
          this.previous_page = data['previous']
          this.spinner.hide()
        },(error)=>console.log(error)
      )

  }

}

