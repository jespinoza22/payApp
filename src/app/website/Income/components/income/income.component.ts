import { Income } from './../../../../core/models/income.model'; 
import { Component, OnInit, Input } from '@angular/core';
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
  descriptionFilter: string;
  amountMaxFilter: number;
  yearFitler: number;
  monthFilter: number;


  constructor(
    public dialog: MatDialog,
    private service: IncomesService
  ) {
    this.months = [ {value: 0, name: 'Todos'}, ...Constants.months];
    this.years = [ {value: 0, name: 'Todos'}, ...Constants.years];
    this.monedas = Constants.monedas;
    this.defaultSizePage = Constants.pageSizes[0];
    this.arraySizes = Constants.pageSizes;
    this.getIncomes();
   }

  ngOnInit(): void {

  }

  openDialog() {
    const dialogRef = this.dialog.open(IncomeDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getIncomes();
    });
  }

  delete(element: any){
    console.log(element);
    if (confirm(`Esta seguro de eliminar el elemento "${element.description}"`)) {
      this.service.deleteIncome(element.idIncome)
      .subscribe(result => {
        if (result != null){
          console.log(result);
          this.getIncomes();
          alert(`Se elimino el elemento correctamente`);
        }
      });
    }
  }

  getIncomes(){
    this.service.getIncome('', this.yearFitler, this.monthFilter, this.amountMaxFilter, this.descriptionFilter).subscribe(result => {
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
