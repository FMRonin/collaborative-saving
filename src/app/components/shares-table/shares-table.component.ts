import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { Shares } from 'src/app/interfaces/shares';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-shares-table',
  templateUrl: './shares-table.component.html',
  styleUrls: ['./shares-table.component.css']
})
export class SharesTableComponent implements OnInit {

  private _member:Member;
  private _shares:Shares[];

  displayedColumns: string[] = ['type','qty','total'] 

  @Input()
  set member(member:Member){
    this._member = member;
  }

  get member():Member {return this._member}
  get shares():Shares[] {return this._shares};

  constructor(private _memberService:MemberService) { }
  
  ngOnInit(): void {
    this._shares = this._memberService.getShares(this.member);
  }

}
