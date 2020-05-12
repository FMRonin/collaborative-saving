import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member';
import { MemberState } from '../enums/member-state.enum';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private members:Member[] = [
    {
      name : "Socio Uno",
      state : MemberState.pending,
      shares : 100000000,
      loans : 10000000,
      lastUpdate: new Date("2020-05-09")
    },
    {
      name : "Socio Dos",
      state : MemberState.already,
      shares : 100000000,
      loans : 10000000,
      lastUpdate: new Date("2020-05-09")
    },
    {
      name : "Socio Tres",
      state : MemberState.already,
      shares : 100000000,
      loans : 10000000,
      lastUpdate: new Date("2020-05-09")
    },
    {
      name : "Socio Cuatro",
      state : MemberState.retired,
      shares : 100000000,
      loans : 10000000,
      lastUpdate: new Date("2020-05-09")
    },
    {
      name : "Socio Cinco",
      state : MemberState.arrear,
      shares : 100000000,
      loans : 10000000,
      lastUpdate: new Date("2020-05-09")
    }
  ]

  constructor() { }

  getMembers(){
    return this.members;
  }


}
