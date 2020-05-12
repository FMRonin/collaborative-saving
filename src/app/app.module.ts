import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { FundComponent } from './components/fund/fund.component';
import { MembersComponent } from './components/members/members.component';
import { EditMemberComponent } from "./components/members/edit-member/edit-member.component";

import {FormsModule} from '@angular/forms';
import { DeleteMemberComponent } from './components/members/delete-member/delete-member.component';
import { MemberStatePipe } from './pipes/member-state.pipe';
import { MemberPanelComponent } from './components/members/member-panel/member-panel.component';
import { SharesTableComponent } from './components/shares-table/shares-table.component';
import { LoansTableComponent } from './components/loans-table/loans-table.component';
import { LoanStatePipe } from './pipes/loan-state.pipe';
import { OthersPaymentsTableComponent } from './components/others-payments-table/others-payments-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    FundComponent,
    MembersComponent,
    EditMemberComponent,
    DeleteMemberComponent,
    MemberStatePipe,
    MemberPanelComponent,
    SharesTableComponent,
    LoansTableComponent,
    LoanStatePipe,
    OthersPaymentsTableComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
