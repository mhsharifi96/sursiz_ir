import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly twitUrl = `${environment.apiUrl}/api/app/twit/`;

  constructor(private http: HttpClient) { }

  fetchtwits(pageNumber:string="1",offset:string="0",limit:string="100"){
    // param https://www.tektutorialshub.com/angular/angular-pass-url-parameters-query-strings/
    let params = new HttpParams()
                .set('page', pageNumber)
                .set('offset', offset)
                .set('limit', limit);
    return this.http.get(this.twitUrl,{params})
  }

  getPaginationTwits(pageUrl){
    return this.http.get(pageUrl);
  }


}
