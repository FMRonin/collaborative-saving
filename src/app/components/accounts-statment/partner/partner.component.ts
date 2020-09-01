import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
export class PartnerComponent implements OnInit, OnChanges {

  @Input() partner:Partner;
  
  participations:Participation[];
  displayedColumnsParticipations: string[] = ['name', 'cnt', 'value'];

  loans:Loan[];
  displayedColumnsLoans: string[] = ['type','balance','interest','installments','fee','installment'];
  
  
  constructor(private _participationService:ParticipationsService, private _loansService:LoansService) { }
  
  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if(this.partner!=null){
      this._participationService.
      getParticipationsForPartner(this.partner.id).
        subscribe(response => {
              this.participations = response;
          }
        )
      this._loansService.
      getLoansForPartner(this.partner.id).
        subscribe(response => {
          console.log(response);
          this.loans = response;
      }, error => {
        this.loans = null;
      })
    }
  }

  getInsterests(loan:Loan){
    return (loan.balance*loan.interest)/100;
  }

  getTotalInstallment(loan:Loan){
    return (this.getInsterests(loan)+loan.fee);
  }


}
