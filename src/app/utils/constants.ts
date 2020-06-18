interface Month {
    value: number;
    name: string;
  }

interface Year {
    value: number;
    name: string;
}

interface Moneda {
  value: string;
  name: string;
  symbol: string;
}

export class Constants{

    static months: Month[] = [
        {value: 1, name: 'Enero'},
        {value: 2, name: 'Febrero'},
        {value: 3, name: 'Marzo'},
        {value: 4, name: 'Abril'},
        {value: 5, name: 'Mayo'},
        {value: 6, name: 'Junio'},
        {value: 7, name: 'Julio'},
        {value: 8, name: 'Agosto'},
        {value: 9, name: 'Setiembre'},
        {value: 10, name: 'Octubre'},
        {value: 11, name: 'Noviembre'},
        {value: 12, name: 'Diciembre'}
      ];

    static  years: Year[] = [
        {value: 2015, name: '2015'},
        {value: 2016, name: '2016'},
        {value: 2017, name: '2017'},
        {value: 2018, name: '2018'},
        {value: 2019, name: '2019'},
        {value: 2020, name: '2020'},
        {value: 2021, name: '2021'},
        {value: 2022, name: '2022'},
        {value: 2023, name: '2023'},
        {value: 2024, name: '2024'},
        {value: 2025, name: '2025'},
        {value: 2026, name: '2026'},
        {value: 2027, name: '2027'},
      ];

    static monedas: Moneda[] = [
      { value: '01', name: 'Soles', symbol: 'S/.' },
      { value: '02', name: 'Dolares', symbol: '$' }
    ];

    static pageSizes: number[] = [ 5, 10, 25, 100];
}