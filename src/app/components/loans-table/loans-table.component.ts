import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { Loans } from 'src/app/interfaces/loans';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-loans-table',
  templateUrl: './loans-table.component.html',
  styleUrls: ['./loans-table.component.css']
})
export class LoansTableComponent implements OnInit {

  private _member:Member;
  private _loans:Loans[];

  displayedColumns: string[] = ['type', 'pct', 'feeMin', 'feeNumber', 'feeTotalNumber', 'loanState', 'balance'] 

  @Input()
  set member(member:Member){
    this._member = member;
  }

  get member():Member {return this._member}
  get loans():Loans[] {return this._loans};

  constructor(private _memberService:MemberService) { }
  
  ngOnInit(): void {
    this._loans = this._memberService.getLoans(this.member);
  }
}
