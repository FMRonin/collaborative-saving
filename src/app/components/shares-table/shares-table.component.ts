import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { Shares } from 'src/app/interfaces/shares';
import { MemberService } from 'src/app/services/member.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-shares-table',
  templateUrl: './shares-table.component.html',
  styleUrls: ['./shares-table.component.css']
})
export class SharesTableComponent implements OnInit {

  private _member:Member;
  private _shares:Shares[];
  private _total:number=0;

  displayedColumns: string[] = ['type','qty','total'] 

  @Input()
  set member(member:Member){
    this._member = member;
  }

  get member():Member {return this._member}
  get shares():Shares[] {return this._shares};
  get total():number {return this._total};

  constructor(
    private _memberService:MemberService, //For delete
    private _membersService:MembersService) { }
  
  ngOnInit(): void {
    this._membersService.getContributions(this.member.uuid).subscribe((res:Shares[]) => {
      this._shares = res;
      console.log(res)
      res.forEach(share => {
        console.log(this._total)
        this._total += share.value
      })
    });
  }

}
