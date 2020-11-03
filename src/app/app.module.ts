import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MemberStatePipe } from './pipes/member-state.pipe';
import { LoanStatePipe } from './pipes/loan-state.pipe';
import { DecimalPipe } from "@angular/common";

import { AccountsStatmentComponent } from './components/accounts-statment/accounts-statment.component';
import { FundInformationComponent } from './components/fund-information/fund-information.component';
import { MoneyCollectionComponent } from './components/money-collection/money-collection.component';
import { PartnerComponent } from './components/accounts-statment/partner/partner.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberStatePipe,
    LoanStatePipe,
    AccountsStatmentComponent,
    FundInformationComponent,
    MoneyCollectionComponent,
    PartnerComponent,
    MainComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
