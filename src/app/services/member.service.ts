import { Injectable } from '@angular/core';
import { Shares } from '../interfaces/shares';
import { Member } from '../interfaces/member';
import { Loans } from '../interfaces/loans';
import { LoanState } from '../enums/loan-state.enum';
import { OtherPyment } from '../interfaces/other-pyment';


const memberLoansSocio1:Loans[] =[
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Agil", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Accion Creddito", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000}
]

const memberLoansSocio2:Loans[] =[
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Agil", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Accion Creddito", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000}
]

const memberLoansSocio3:Loans[] =[
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Agil", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Accion Creddito", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000}
]

const memberLoansSocio4:Loans[] =[
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Agil", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Accion Creddito", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000}
]

const memberLoansSocio5:Loans[] =[
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Agil", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Accion Creddito", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000},
  {type: "Corriente", pct: 1.5, feeMin:200000, feeNumber: 5, feeTotalNumber: 60, state:LoanState.OUTLAYING, balance:50000000}
]

const memberOtherPymentsSocio1:OtherPyment[]=[
  {type: "actividad", amount:100000, detail:"Esto es una prueba"},
  {type: "multas"   , amount:  5000, detail:"Esto es una prueba"},
  {type: "mora"     , amount:  4800, detail:"Esto es una prueba"},
  {type: "caridad"  , amount:     0, detail:"Esto es una prueba"}
]

const memberOtherPymentsSocio2:OtherPyment[]=[
  {type: "actividad", amount:100000, detail:"Esto es una prueba"},
  {type: "multas"   , amount:  5000, detail:"Esto es una prueba"},
  {type: "mora"     , amount:  4800, detail:"Esto es una prueba"},
  {type: "caridad"  , amount:     0, detail:"Esto es una prueba"}
]

const memberOtherPymentsSocio3:OtherPyment[]=[
  {type: "actividad", amount:100000, detail:"Esto es una prueba"},
  {type: "multas"   , amount:  5000, detail:"Esto es una prueba"},
  {type: "mora"     , amount:  4800, detail:"Esto es una prueba"},
  {type: "caridad"  , amount:     0, detail:"Esto es una prueba"}
]

const memberOtherPymentsSocio4:OtherPyment[]=[
  {type: "actividad", amount:100000, detail:"Esto es una prueba"},
  {type: "multas"   , amount:  5000, detail:"Esto es una prueba"},
  {type: "mora"     , amount:  4800, detail:"Esto es una prueba"},
  {type: "caridad"  , amount:     0, detail:"Esto es una prueba"}
]

const memberOtherPymentsSocio5:OtherPyment[]=[
  {type: "actividad", amount:100000, detail:"Esto es una prueba"},
  {type: "multas"   , amount:  5000, detail:"Esto es una prueba"},
  {type: "mora"     , amount:  4800, detail:"Esto es una prueba"},
  {type: "caridad"  , amount:     0, detail:"Esto es una prueba"}
]

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private _memberShares:Shares[] = [];
  private _memberLoans:Loans[] = [];
  private _memberOtherPyments:OtherPyment[]=[];

  constructor() { }

  getLoans(member:Member){
    if(member.name=="Socio Uno")
      this._memberLoans = memberLoansSocio1;
    else if(member.name=="Socio Dos")
      this._memberLoans = memberLoansSocio2
    else if(member.name=="Socio Tres")
      this._memberLoans = memberLoansSocio3
    else if(member.name=="Socio Cuatro")
      this._memberLoans = memberLoansSocio4
    else if(member.name=="Socio Cinco")
      this._memberLoans = memberLoansSocio5
    
    return this._memberLoans;
  }

  getOtherPyments(member:Member){
    if(member.name=="Socio Uno")
      this._memberOtherPyments = memberOtherPymentsSocio1;
    else if(member.name=="Socio Dos")
      this._memberOtherPyments = memberOtherPymentsSocio2
    else if(member.name=="Socio Tres")
      this._memberOtherPyments = memberOtherPymentsSocio3
    else if(member.name=="Socio Cuatro")
      this._memberOtherPyments = memberOtherPymentsSocio4
    else if(member.name=="Socio Cinco")
      this._memberOtherPyments = memberOtherPymentsSocio5
    
    return this._memberOtherPyments;
  }
}
