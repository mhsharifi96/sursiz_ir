import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly gettwits = `${environment.apiUrl}/api/app/twit/`;

  constructor(private http: HttpClient) { }

  fetchtwits(){
    return this.http.get(this.gettwits)
  }




}
