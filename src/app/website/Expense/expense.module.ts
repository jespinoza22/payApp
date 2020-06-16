import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './components/expense/expense.component';
import { ExpenseDetailComponent } from './components/expense-detail/expense-detail.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ExpenseComponent,
    ExpenseDetailComponent]
    ,
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ExpenseModule { }
