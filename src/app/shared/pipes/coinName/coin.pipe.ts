import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../../../utils/constants';

@Pipe({
  name: 'coin'
})
export class CoinPipe implements PipeTransform {

  transform(value: string): string {
    const resultado = Constants.monedas.find( el => el.value === value);
    return  `(${resultado.symbol}) ${resultado.name}` ;
  }
}
