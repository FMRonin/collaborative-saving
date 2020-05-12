import { Pipe, PipeTransform } from '@angular/core';
import { MemberState } from '../enums/member-state.enum';

@Pipe({
  name: 'memberState'
})
export class MemberStatePipe implements PipeTransform {

  transform(value: MemberState, ...args: unknown[]): string {
    if(value==MemberState.already)
      return "PAZ y SALVO";
    if(value==MemberState.pending)
      return "PENDIENTE";
    if (value==MemberState.arrear)
      return "EN MORA";
    if (value==MemberState.retired)
      return "RETIRADO";
    return null;
  }

}
