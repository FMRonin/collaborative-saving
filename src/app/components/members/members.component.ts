import { Component, OnInit } from '@angular/core';

import { Member } from 'src/app/interfaces/member';
import { MembersService } from 'src/app/services/members.service';

import { EditMemberComponent } from './edit-member/edit-member.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteMemberComponent } from './delete-member/delete-member.component';
import { MemberState } from 'src/app/enums/member-state.enum';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members:Member[] = [];

  classValidation(member:Member){
    if(member.state==MemberState.already)
      return {'color-user-state-already':true}
    if (member.state==MemberState.pending)
      return {'color-user-state-pending':true}
    if (member.state==MemberState.arrear)
      return {'color-user-state-arrear':true}
  }

  constructor(private _membersService:MembersService, public dialog: MatDialog) { }

  editMember(data_member:Member, index:number): void {
    const dialogRef = this.dialog.open(EditMemberComponent, {
      width: '250px',
      data: data_member.name
    });

    dialogRef.afterClosed().subscribe(result => {
      this.members[index].name= (result == null) ? data_member.name : result;
    });
  }

  deleteMember(data_member:Member, index:number): void {
    const dialogRef = this.dialog.open(DeleteMemberComponent, {
      width: '250px',
      data: data_member
    });

    dialogRef.afterClosed().subscribe(result => {
     (result==true) ? this.members[index].state=MemberState.retired : console.log('Canceled');
    });
  }

  isRetired(data_member:Member, index:number){
    return (data_member.state != MemberState.retired);
  }

  ngOnInit(): void {
    this.members = this._membersService.getMembers();
  }

}
