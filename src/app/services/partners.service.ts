import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { Partner } from "../interfaces/partner";

@Injectable({
  providedIn: 'root'
})
export class PartnersService {

  partners:Partner[]

  constructor( private http:HttpClient ) { }

  getQuery(query:string){
    const url = `http://localhost:3000/partners/${query}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url,{headers});
  }
  getPartners(){
    return this.getQuery('').pipe(map(this.mapResponse));
  }

  private mapResponse(response){
      this.partners = [];
      
      if(response === null){return [];}
      
      response.forEach(element => {
        const partner:Partner = element;
        this.partners.push(partner)
      });

      return this.partners;
  }
}
