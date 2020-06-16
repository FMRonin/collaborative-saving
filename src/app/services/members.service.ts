import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member';
import { MemberState } from '../enums/member-state.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){
    const url = `http://localhost:3000/${query}`

    /*
    const headers = new HttpHeaders({
      'Authorization': 'Bearer '
    });
    */
   
    //return this.http.get(url,{headers});
    return this.http.get(url);
  }

  getMembers(){
   return this.getQuery('partners')
  }

  getContributions(uuid:string){
    console.log(uuid)
    return this.getQuery(`contributions/${uuid}`)
    .pipe(map(res => res['shares']))
  }


}
