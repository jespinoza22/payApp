import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../../../../core/services/expenses/expenses.service';
import { Expense } from '../../../../core/models/expense.model';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Constants } from '../../../../utils/constants';
import { ExpenseDetailComponent } from '../expense-detail/expense-detail.component';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  displayedColumns: string[] = ['description', 'dateCreation', 'dateApply', 'moneda', 'amount', 'idExpense'];
  dataSource: Expense[];
  dataObject: Expense[];
  lenghTable: number;
  defaultSizePage: number;
  pageEvent: PageEvent;
  arraySizes: number[];
  monedas: any;
  months: any;
  years: any;
  descriptionFilter: string;
  amountMaxFilter: number;
  yearFitler: number;
  monthFilter: number;

  constructor(
    public dialog: MatDialog,
    private service: ExpensesService
  ) {
    this.months = Constants.months;
    this.years = Constants.years;
    this.monedas = Constants.monedas;
    this.defaultSizePage = Constants.pageSizes[0];
    this.arraySizes = Constants.pageSizes;
    this.getExpenses();
  }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExpenseDetailComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getExpenses();
    });
  }

  getExpenses(){
    this.service.getExpense('', this.yearFitler, this.monthFilter, this.amountMaxFilter, this.descriptionFilter).subscribe(result => {
      this.dataObject = result;
      this.dataSource = result;
      this.lenghTable = result.length;
      console.log(result, 'resultExpense');
      const nuevoArray = this.dataObject.filter((item, index) => {
        return ( index >= 0 && index <= this.defaultSizePage - 1);
      });
      this.dataSource = nuevoArray;
    });
  }

  delete(element: any){
    console.log(element);
    if (confirm(`Esta seguro de eliminar el elemento "${element.description}"`)) {
      this.service.deleteExpense(element.idExpense)
      .subscribe(result => {
        if (result != null){
          console.log(result);
          this.getExpenses();
          alert(`Se elimino el elemento correctamente`);
        }
      });
    }
  }

  public getServerData(event?: PageEvent): any{
    const nuevoArray = this.dataObject.filter((item, index) => {
      return ( index >= (event.pageIndex * event.pageSize) && index <= (event.pageSize * (event.pageIndex + 1) - 1));
    });
    this.dataSource = nuevoArray;
  }
}
