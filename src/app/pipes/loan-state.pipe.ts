import { Pipe, PipeTransform } from '@angular/core';
import { LoanState } from '../enums/loan-state.enum';

@Pipe({
  name: 'loanState'
})
export class LoanStatePipe implements PipeTransform {

  transform(value: LoanState, ...args: unknown[]): unknown {
    if(value==LoanState.OUTLAYING)
    return "Entregandose";
    if(value==LoanState.PAYING)
      return "Pagandose";
    if (value==LoanState.ARREARS)
      return "En Mora";
    if (value==LoanState.PAID)
      return "Pagado";
  }

}
