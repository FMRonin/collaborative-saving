import { Component, Input, NgModuleRef, OnInit } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner';
import { ParticipationsService } from 'src/app/services/participations.service';
import { Participation } from 'src/app/interfaces/participation';
import { LoansService } from 'src/app/services/loans.service';
import { Loan } from 'src/app/interfaces/loan';
import { DecimalPipe } from "@angular/common";
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent {


  @Input() partner:Partner;
  @Output() totalAmountEvent = new EventEmitter<string>();

  loans:Loan[];
  participations:Participation[];
  totalQuotasValue:number=0;
  totalContributionsValue:number=0;
  
  constructor(
    private _participationService:ParticipationsService, 
    private _loansService:LoansService) {
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
      this.getTotalMount();
    }
  }

  getTotalLoanQuotas(event:string){
    this.totalQuotasValue=parseFloat(event);
    this.getTotalMount();
  }

  getTotalContributions(event:string){
    this.totalContributionsValue=parseFloat(event)
    this.getTotalMount();
  }

  getTotalMount(){
    let total = this.totalQuotasValue+this.totalContributionsValue;
    this.partner.collection=total;
  }
}
