export interface Loan {
    type:string,
    rate:number,
    balance:number, 
    installments:string,
    fee:number,
    totalAmount?:number
}
