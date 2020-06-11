import { Component, OnInit } from '@angular/core';
import { IncomeDetailComponent } from '../income-detail/income-detail.component';
import { Constants } from '../../../../utils/constants';
import { MatDialog } from '@angular/material/dialog';
// import { MatDialog, MatDialogModule, MatDialogRef  } from '@angular/material/dialog';

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

  months: any;
  years: any;

  constructor(
    public dialog: MatDialog
  ) {
    this.months = Constants.months;
    this.years = Constants.years;
   }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(IncomeDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
