import { Component, OnInit } from '@angular/core';
import { IncomeDetailComponent } from '../income-detail/income-detail.component';
// import { MatDialog, MatDialogModule, MatDialogRef  } from '@angular/material/dialog';

interface Month {
  value: string;
  name: string;
}

interface Year {
  value: string;
  name: string;
}

export interface Data {
  description: string;
  position: number;
  fechaR: string;
  fechaA: string;
  monto: number;
  id: string;
}

// export interface Data {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
// ];

const ELEMENT_DATA: Data[] = [
  {position: 1, description: 'Ingreso 1', fechaR: '04/06/2020', fechaA: '09/06/2020', monto: 1500, id: '1'},
  {position: 2, description: 'Ingreso 2', fechaR: '05/06/2020', fechaA: '09/06/2020', monto: 1600, id: '2'},
  {position: 3, description: 'Ingreso 3', fechaR: '06/06/2020', fechaA: '09/06/2020', monto: 1700, id: '3'},
  {position: 4, description: 'Ingreso 4', fechaR: '07/06/2020', fechaA: '09/06/2020', monto: 1800, id: '4'},
  {position: 5, description: 'Ingreso 15', fechaR: '09/06/2020', fechaA: '09/06/2020', monto: 1900, id: '5'}
];

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'description', 'fechaR', 'fechaA', 'monto', 'id'];
  dataSource = ELEMENT_DATA;

  months: Month[] = [
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

  years: Year[] = [
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

  constructor(
    // public dialog: MatDialog
  ) {
    console.log('income works hereee');
   }

  ngOnInit(): void {
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(IncomeDetailComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }


}
