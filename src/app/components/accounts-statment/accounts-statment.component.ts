import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnersService } from 'src/app/services/partners.service';
import { Partner } from 'src/app/interfaces/partner';

@Component({
  selector: 'app-accounts-statment',
  templateUrl: './accounts-statment.component.html',
  styleUrls: ['./accounts-statment.component.css']
})
export class AccountsStatmentComponent implements OnInit {

  partners:Partner[]=[];
  globalPartner:Partner;

  constructor(private _partnersService:PartnersService, private _router:Router) { }

  ngOnInit(): void {
    this._partnersService.getPartners()
    .subscribe(response => {
      this.partners = response;
    })
  }

  updateCollection(event,i){
    this.partners[i].collection = parseFloat(event);
  }

}
