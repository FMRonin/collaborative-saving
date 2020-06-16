import { MemberState } from '../enums/member-state.enum';

export interface Member {
    uuid?:string,
    name:string,
    state:MemberState,
    shares:number,
    loans:number
}
