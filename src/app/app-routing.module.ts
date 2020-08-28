import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from "./components/";
import { MembersComponent } from "./components/members/members.component";

const routes: Routes = [
    { path: 'fondo', component: FundComponent },
    { path: 'socios', component: MembersComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'fondo' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
