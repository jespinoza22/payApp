interface Month {
    value: string;
    name: string;
  }

interface Year {
    value: string;
    name: string;
}

export class Constants{

    static months: Month[] = [
        {value: '01', name: 'Enero'},
        {value: '02', name: 'Febrero'},
        {value: '03', name: 'Marzo'},
        {value: '04', name: 'Abril'},
        {value: '05', name: 'Mayo'},
        {value: '06', name: 'Junio'},
        {value: '07', name: 'Julio'},
        {value: '08', name: 'Agosto'},
        {value: '09', name: 'Setiembre'},
        {value: '10', name: 'Octubre'},
        {value: '11', name: 'Noviembre'},
        {value: '12', name: 'Diciembre'}
      ];

    static  years: Year[] = [
        {value: '2015', name: '2015'},
        {value: '2016', name: '2016'},
        {value: '2017', name: '2017'},
        {value: '2018', name: '2018'},
        {value: '2019', name: '2019'},
        {value: '2020', name: '2020'},
        {value: '2021', name: '2021'},
        {value: '2022', name: '2022'},
        {value: '2023', name: '2023'},
        {value: '2024', name: '2024'},
        {value: '2025', name: '2025'},
        {value: '2026', name: '2026'},
        {value: '2027', name: '2027'},
      ];
}