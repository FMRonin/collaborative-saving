import { Component, OnInit, Inject } from '@angular/core';
import { MembersService } from 'src/app/services/members.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'app-delete-member',
  template: `
  <h1 mat-dialog-title>Desea eliminar al socio {{data.name}}</h1>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancelar</button>
    <button mat-button [mat-dialog-close]="onClick()" cdkFocusInitial>Aceptar</button>
  </div>
  `,
  styles: [
  ]
})
export class DeleteMemberComponent implements OnInit {

  constructor(
    private _memberService:MembersService,
    public dialogRef: MatDialogRef<DeleteMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Member) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){
    return true;
  }

}
