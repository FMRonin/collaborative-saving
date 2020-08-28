import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsStatmentComponent } from "./components/accounts-statment/accounts-statment.component";
import { FundInformationComponent } from "./components/fund-information/fund-information.component";
import { MoneyCollectionComponent } from "./components/money-collection/money-collection.component"

const routes: Routes = [
    { path: 'accounts-statment', component: AccountsStatmentComponent },
    { path: 'fund-information', component: FundInformationComponent },
    { path: 'money-collection', component: MoneyCollectionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fondo' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
