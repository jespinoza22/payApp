import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeComponent } from './components/income/income.component';
import { IncomeDetailComponent } from './components/income-detail/income-detail.component';

const routes: Routes = [
  {
    path: '',
    component: IncomeComponent
  },
  {
    path: ':id',
    component: IncomeDetailComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class IncomeRoutingModule { }
