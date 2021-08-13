import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Loan } from 'src/app/interfaces/loan';

@Component({
  selector: 'app-partner-loans',
  templateUrl: './partner-loans.component.html',
  styleUrls: ['./partner-loans.component.css']
})
export class PartnerLoansComponent implements OnInit {
  
  @Input() loans:Loan[];

  @Output() totalAmountEvent = new EventEmitter<string>();

  editable:boolean[]=[];
  totalInstallments:number;
  displayedColumnsLoans: string[] = ['type', 'rate','balance','interest', 'fee','installments','installment'];
  
  constructor(private _amountPipe:DecimalPipe) { }

  ngOnInit(): void {
    this.getTotalInstallments();
  }

  transformAmount(elementDOM){
    let str = elementDOM.target.value
    let matches = str.match(/([\d]*,?)*[\d]\.?[\d]*/g);
    str = (matches != null )?matches[0].replace(/,/gi,''):0;
    elementDOM.target.value = this._amountPipe.transform(str,'','en-US');
  }

  getInsterests(loan:Loan){
    return (loan.balance*loan.rate)/100;
  }

  getTotalInstallment(loan:Loan){
    if(loan.totalAmount>=0)
      return loan.totalAmount
    loan.totalAmount=this.getInsterests(loan)+loan.fee;
    return loan.totalAmount;
  }

  //this.emiteTotalLoans(totalInstallments);

  getTotalInstallments(){
    let totalInstallments1 = 0;
    if(this.loans != null){
    this.loans.forEach(loan => {
      totalInstallments1 += this.getTotalInstallment(loan);
      });
    }
    this.totalInstallments=totalInstallments1;
    return this.totalInstallments;
  }

  emiteTotalLoans(){
    this.totalAmountEvent.emit(this.totalInstallments.toString());
  }

  updateTotalAmountLoan(index,eventDOM){
    let str:string = eventDOM.target.value;
    let value:number = parseFloat(str.replace(/,/gi,''));
    this.loans[index].totalAmount=value;
    this.getTotalInstallments();
    this.emiteTotalLoans();
  }

}
