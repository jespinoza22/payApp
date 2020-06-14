import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinPipe } from './pipes/coinName/coin.pipe';


@NgModule({
  declarations: [
    CoinPipe
  ],
  exports: [
    CoinPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
