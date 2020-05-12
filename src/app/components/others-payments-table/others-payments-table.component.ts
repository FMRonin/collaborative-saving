import { Component, OnInit, Input } from '@angular/core';
import { OtherPyment } from 'src/app/interfaces/other-pyment';
import { Member } from 'src/app/interfaces/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-others-payments-table',
  templateUrl: './others-payments-table.component.html',
  styleUrls: ['./others-payments-table.component.css']
})
export class OthersPaymentsTableComponent implements OnInit {

  private _member:Member;
  private _otherPayments:OtherPyment[];

  displayedColumns: string[] = ['type', 'amount', 'detail'] 

  @Input()
  set member(member:Member){
    this._member = member;
  }

  get member():Member {return this._member}
  get otherPayments():OtherPyment[] {return this._otherPayments};

  constructor(private _memberService:MemberService) { }
  
  ngOnInit(): void {
    this._otherPayments = this._memberService.getOtherPyments(this.member);
  }
}
