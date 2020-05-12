import { MemberState } from '../enums/member-state.enum';

export interface Member {
    name:string,
    state:MemberState,
    shares:number,
    loans:number,
    lastUpdate:Date
}
