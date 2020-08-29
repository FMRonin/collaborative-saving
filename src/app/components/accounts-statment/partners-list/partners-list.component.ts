import { Component, OnInit } from '@angular/core';
import { PartnersService } from "../../../services/partners.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.css']
})
export class PartnersListComponent implements OnInit {

  constructor(private _partnersService:PartnersService,
    private _route:Router) { }

  ngOnInit(): void {
    this._partnersService.getPartners().subscribe(response => {
      console.log(response);
    })
  }

}
