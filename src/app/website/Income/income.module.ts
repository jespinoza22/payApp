import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './components/income/income.component';
import { IncomeDetailComponent } from './components/income-detail/income-detail.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    IncomeComponent,
    IncomeDetailComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    MaterialModule
  ]
})
export class IncomeModule { }
