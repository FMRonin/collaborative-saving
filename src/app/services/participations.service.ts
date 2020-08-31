import { Injectable } from '@angular/core';
import { Participation } from '../interfaces/participation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParticipationsService {

  participations:Participation[];

  constructor( private http:HttpClient ) { }

  getQuery(query:string){
    const url = `http://localhost:3000/participations/${query}`

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(url,{headers});
  }
  getParticipationsForPartner(id){
    return this.getQuery(id).pipe(map(this.mapResponse));
  }

  private mapResponse(response){
      this.participations = [];
      
      if(response === null){return [];}
      response.partnerParticipations.forEach(element => {
        const participation:Participation = element;
        this.participations.push(participation);
      });

      return this.participations;
  }
}
