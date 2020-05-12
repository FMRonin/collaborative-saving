import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Member } from 'src/app/interfaces/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-edit-member',
  template: `
  <h1 mat-dialog-title>Hi</h1>
  <div mat-dialog-content>
    <p>Editar socio</p>
    <mat-form-field>
      <mat-label>Nombre Socio</mat-label>
      <input matInput [(ngModel)]="localData">
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onNoClick()">Cancelar</button>
    <button mat-button [mat-dialog-close]="localData" cdkFocusInitial>Aceptar</button>
  </div>
  `,
  styles: [
  ]
})
export class EditMemberComponent implements OnInit {

  localData:string;

  constructor(
    private _memberService:MembersService,
    public dialogRef: MatDialogRef<EditMemberComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.localData = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClick(){
    this.data = this.localData;
    return "true";
  }

}
