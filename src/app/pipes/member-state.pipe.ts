import { Pipe, PipeTransform } from '@angular/core';
import { MemberState } from '../enums/member-state.enum';

@Pipe({
  name: 'memberState'
})
export class MemberStatePipe implements PipeTransform {

  transform(value: MemberState, ...args: unknown[]): string {
    if(value==MemberState.FREE)
      return "PAZ y SALVO";
    if(value==MemberState.PENDING)
      return "PENDIENTE";
    if (value==MemberState.ARREAR)
      return "EN MORA";
    if (value==MemberState.RETAIRED)
      return "RETIRADO";
    return null;
  }

}
