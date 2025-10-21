import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMode } from './account-mode';
import { AccountDetails } from './account-details';
import { RouterModule } from '@angular/router';
import { Account } from './account';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: Account },
      { path: ":id", component: AccountDetails },
      { path: "mode", component: AccountMode },
    ]),
    Account,
    AccountDetails,
    AccountMode,
  ],
})
export class AccountModule { }
