import { Component, Input, OnInit } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner';
import { ParticipationsService } from 'src/app/services/participations.service';
import { Participation } from 'src/app/interfaces/participation';
import { LoansService } from 'src/app/services/loans.service';
import { Loan } from 'src/app/interfaces/loan';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit {


  @Input() partner:Partner;
  
  participations:Participation[];
  displayedColumnsParticipations: string[] = ['name', 'cnt', 'unitContribution','totalContribution'];

  loans:Loan[];
  displayedColumnsLoans: string[] = ['type', 'rate','balance','interest', 'fee','installments','installment'];
  
  
  constructor(
    private _participationService:ParticipationsService, 
    private _loansService:LoansService) {
    }
  
  ngOnInit(): void {
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
    return (this.getInsterests(loan)+loan.fee);
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
    return (partisipation.cnt*partisipation.unitContribution);
  }

  getTotalContributions(){
    let totalContributions:number = 0;
    if(this.participations == null){return totalContributions}
    this.participations.forEach(participation =>{
      totalContributions+=this.getTotalContribution(participation);
    })
    return totalContributions;
  }
}
