import { Income } from './../../../../core/models/income.model';
import { Component, OnInit } from '@angular/core';
import { IncomeDetailComponent } from '../income-detail/income-detail.component';
import { Constants } from '../../../../utils/constants';
import { MatDialog } from '@angular/material/dialog';
import { IncomesService } from '../../../../core/services/incomes/incomes.service';
import { PageEvent } from '@angular/material/paginator';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  displayedColumns: string[] = ['description', 'dateCreation', 'dateApply', 'moneda', 'amount', 'idUser'];
  dataSource: Income[];
  dataObject: Income[];
  months: any;
  years: any;
  monedas: any;
  lenghTable: number;
  defaultSizePage: number;
  arraySizes: number[];
  pageEvent: PageEvent;


  constructor(
    public dialog: MatDialog,
    private service: IncomesService
  ) {
    this.months = Constants.months;
    this.years = Constants.years;
    this.monedas = Constants.monedas;
    this.defaultSizePage = Constants.pageSizes[0];
    this.arraySizes = Constants.pageSizes;
    this.getAllIncomes();
   }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(IncomeDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getAllIncomes();
    });
  }

  delete(element: any){
    console.log(element);
    if (confirm(`Esta seguro de eliminar el elemento "${element.description}"`)) {
      this.service.deleteIncome(element.idIncome)
      .subscribe(result => {
        if (result != null){
          console.log(result);
          this.getAllIncomes();
          alert(`Se elimino el elemento correctamente`);
        }
      });
    }
  }

  getAllIncomes(){
    this.service.getAllIncome().subscribe(result => {
      this.dataObject = result;
      this.dataSource = result;
      this.lenghTable = result.length;
      console.log(result, 'result');
      const nuevoArray = this.dataObject.filter((item, index) => {
        return ( index >= 0 && index <= this.defaultSizePage - 1);
      });
      this.dataSource = nuevoArray;
    });
  }

  public getServerData(event?: PageEvent): any{
    const nuevoArray = this.dataObject.filter((item, index) => {
      return ( index >= (event.pageIndex * event.pageSize) && index <= (event.pageSize * (event.pageIndex + 1) - 1));
    });
    this.dataSource = nuevoArray;
  }
}
