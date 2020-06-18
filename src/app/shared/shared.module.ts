import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinPipe } from './pipes/coinName/coin.pipe';
import { MonthPipe } from './pipes/monthName/month.pipe';


@NgModule({
  declarations: [
    CoinPipe,
    MonthPipe
  ],
  exports: [
    CoinPipe,
    MonthPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
