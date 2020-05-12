import { Component, OnInit, Input } from '@angular/core';
import { Member } from 'src/app/interfaces/member';
import { Shares } from 'src/app/interfaces/shares';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-panel',
  templateUrl: './member-panel.component.html',
  styleUrls: ['./member-panel.component.css']
})
export class MemberPanelComponent implements OnInit {

  private _member:Member;
  
  @Input()
  set member(member:Member){
    this._member = member;
  }

  get member():Member {return this._member}

  constructor(private _memberService:MemberService) { }

  ngOnInit(): void {
  }

}
