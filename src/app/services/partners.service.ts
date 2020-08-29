import { HttpClientJsonpModule, HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  private URLPartnerService:string = "http://localhost:3000/partners";

  constructor(private jsonp:HttpClientJsonpModule, private http:HttpClient) { }

  getPartners(){
    return this.http.get(this.URLPartnerService)
  }
}
