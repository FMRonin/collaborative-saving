import { LoanState } from '../enums/loan-state.enum';

export interface Loans {
    type: string,
    pct: number,
    feeMin:number,
    feeNumber: number, 
    feeTotalNumber: number, 
    state:LoanState,
    balance:number
}
