import { Injectable } from '@angular/core';
import { Loan } from '../interfaces/loan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoansService {

  loans:Loan[];

  constructor( private http:HttpClient ) { }

  getQuery(query:string){
    const url = `http://localhost:3000/loans/${query}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url,{headers});
  }
  getLoansForPartner(id){
    return this.getQuery(id).pipe(map(this.mapResponse));
  }

  private mapResponse(response){
      this.loans = [];
      
      if(response === null){return [];}
      response.PartnerLoans.forEach(element => {
        const participation:Loan = element;
        this.loans.push(participation);
      });

      return this.loans;
  }
}
