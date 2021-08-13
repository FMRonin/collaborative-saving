import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participation } from 'src/app/interfaces/participation';

@Component({
  selector: 'app-partner-participation',
  templateUrl: './partner-participation.component.html',
  styleUrls: ['./partner-participation.component.css']
})
export class PartnerParticipationComponent implements OnInit {

  @Input() participations:Participation[]

  @Output() totalAmountEvent = new EventEmitter<string>();

  totalParticipations:number = 0;
  editable:boolean[]=[]; 
  displayedColumnsParticipations: string[] = ['name', 'cnt', 'unitContribution','totalContribution'];


  constructor(private _amountPipe:DecimalPipe) { }

  ngOnInit(): void {
  }

  transformAmount(elementDOM){
    let str = elementDOM.target.value
    let matches = str.match(/([\d]*,?)*[\d]\.?[\d]*/g);
    str = (matches != null )?matches[0].replace(/,/gi,''):0;
    elementDOM.target.value = this._amountPipe.transform(str,'','en-US');
  }

  getTotalContribution(partisipation:Participation){
    if(partisipation.totalAmount>=0)
      return partisipation.totalAmount
    partisipation.totalAmount=partisipation.cnt*partisipation.unitContribution;
    return partisipation.totalAmount;
  }

  updateTotalAmountParticipation(index,eventDOM){
    let str:string = eventDOM.target.value;
    let value:number = parseFloat(str.replace(/,/gi,''));
    this.participations[index].totalAmount=value;
    this.getTotalContributions();
    this.emiteTotalContribution()
  }

  emiteTotalContribution(){
    this.totalAmountEvent.emit(this.totalParticipations.toString());
  }

  getTotalContributions(){
    let totalContributions:number = 0;
    if(this.participations == null){return totalContributions}
    this.participations.forEach(participation =>{
      totalContributions += this.getTotalContribution(participation);
    })
    this.totalParticipations=totalContributions;
    return this.totalParticipations;
  }
}
