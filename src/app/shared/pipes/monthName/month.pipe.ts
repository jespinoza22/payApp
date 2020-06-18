import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../../../utils/constants';

@Pipe({
  name: 'month'
})
export class MonthPipe implements PipeTransform {

  transform(month: number): string {
    const resultado = Constants.months.find( el => el.value === month);
    return  `${resultado.name}` ;
  }

}
