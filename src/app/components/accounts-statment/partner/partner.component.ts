import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Partner } from 'src/app/interfaces/partner';
import { ParticipationsService } from 'src/app/services/participations.service';
import { Participation } from 'src/app/interfaces/participation';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css']
})
export class PartnerComponent implements OnInit, OnChanges {

  @Input() partner:Partner;
  panelOpenState = true;
  participations:Participation[];
  displayedColumns: string[] = ['name', 'cnt', 'value'];

  constructor(private _participationService:ParticipationsService) { }
  
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
    }
  }

  getParticipations(){

  }

}
