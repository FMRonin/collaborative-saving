import { Component, Input, NgModuleRef, OnInit } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner';
import { ParticipationsService } from 'src/app/services/participations.service';
import { Participation } from 'src/app/interfaces/participation';
import { LoansService } from 'src/app/services/loans.service';
import { Loan } from 'src/app/interfaces/loan';
import { DecimalPipe } from "@angular/common";

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {


  @Input() partner:Partner;

  editable:boolean[]=[];
  
  
  participations:Participation[];
  displayedColumnsParticipations: string[] = ['name', 'cnt', 'unitContribution','totalContribution'];

  loans:Loan[];
  displayedColumnsLoans: string[] = ['type', 'rate','balance','interest', 'fee','installments','installment'];
  
  
  constructor(
    private _participationService:ParticipationsService, 
    private _loansService:LoansService,
    private _amountPipe:DecimalPipe) {
    }

  transformAmount(elementDOM){
    let str = elementDOM.target.value
    let matches = str.match(/([\d]*,?)*[\d]\.?[\d]*/g);
    str = (matches != null )?matches[0].replace(/,/gi,''):0;
    elementDOM.target.value = this._amountPipe.transform(str,'','en-US');
  }

  getPartnerInformation(){
    if(this.partner!=null){
      this._participationService.getParticipationsForPartner(this.partner.id).
        subscribe(response => {
            this.participations = response;
          }
        )
      this._loansService.getLoansForPartner(this.partner.id).
        subscribe(response => {
          this.loans = response;
      }, error => {
        this.loans = null;
      })
    }
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

  getTotalInstallments(){
    let totalInstallments:number = 0;
    if(this.loans == null){return totalInstallments}
    this.loans.forEach(loan => {
      totalInstallments += this.getTotalInstallment(loan);
    });
    return totalInstallments;
  }

  getTotalContribution(partisipation:Participation){
    if(partisipation.totalAmount>=0)
      return partisipation.totalAmount
    partisipation.totalAmount=partisipation.cnt*partisipation.unitContribution;
    return partisipation.totalAmount;
  }

  getTotalContributions(){
    let totalContributions:number = 0;
    if(this.participations == null){return totalContributions}
    this.participations.forEach(participation =>{
      totalContributions+=this.getTotalContribution(participation);
    })
    return totalContributions;
  }

  updateTotalAmountParticipation(index,eventDOM){
    let str:string = eventDOM.target.value;
    let value:number = parseFloat(str.replace(/,/gi,''));
    this.participations[index].totalAmount=value;
  }

  updateTotalAmountLoan(index,eventDOM){
    let str:string = eventDOM.target.value;
    let value:number = parseFloat(str.replace(/,/gi,''));
    this.loans[index].totalAmount=value;
  }
}
