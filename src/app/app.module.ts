import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MemberStatePipe } from './pipes/member-state.pipe';
import { LoanStatePipe } from './pipes/loan-state.pipe';

import { HeaderComponent } from './components/shared/header/header.component';
import { AccountsStatmentComponent } from './components/accounts-statment/accounts-statment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MemberStatePipe,
    LoanStatePipe,
    AccountsStatmentComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
