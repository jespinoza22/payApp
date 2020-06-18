import { Income } from './../../../../core/models/income.model';
import { Component, OnInit, Inject, ComponentFactoryResolver } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IncomesService } from '../../../../core/services/incomes/incomes.service';
import { ExpensesService } from '../../../../core/services/expenses/expenses.service';

@Component({
  selector: 'app-resume-detail',
  templateUrl: './resume-detail.component.html',
  styleUrls: ['./resume-detail.component.scss']
})
export class ResumeDetailComponent implements OnInit {

  year: number;
  month: number;
  totalMesSoles = 0;
  totalMesDolares = 0;
  days: number[] = [];
  amountDefault: number[] = [];

  chartDataSoles = [
    { data: [], label: 'Ingresos - (S/.)' },
    { data: [], label: 'Egresos - (S/.)' }
  ];

  chartDataDolares = [
    { data: [], label: 'Ingresos - ($)' },
    { data: [], label: 'Egresos - ($)' }
  ];

  chartOptions = {
    responsive: true
  };

  chartLabels = [];

  myColors = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgb(49, 76, 229)',
      pointBackgroundColor: 'rgb(49, 76, 229)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(49, 76, 229, .8)'
    },
    {
      backgroundColor: 'transparent',
      borderColor: 'rgb(232, 79, 79)',
      pointBackgroundColor: 'rgb(232, 79, 79)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(232, 79, 79, .8)'
    },
  ];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private incomeService: IncomesService,
    private expenseService: ExpensesService
  ) {
    this.year = data.yearDetail;
    this.month = data.monthDetail;
    this.calculateDays();

    this.incomeService.getIncome('', this.year, this.month).subscribe(result => {
      this.setResult(result, 0);
    });

    this.expenseService.getExpense('', this.year, this.month).subscribe(result => {
      this.setResult(result, 1);
    });
  }

  ngOnInit(): void {
  }

  calculateDays(){
    const daysMonth = new Date(this.year, this.month, 0).getDate();
    for (let index = 1; index <= daysMonth; index++) {
      this.days.push(index);
      this.amountDefault.push(0); //default values amount per day
    }
    this.chartLabels = this.days;
  }

  setResult(result: any, index: number){
    let defaultSoles: Array<number>;
    let defaultDolares: Array<number>;

    defaultSoles = Object.assign([], this.amountDefault);
    defaultDolares = Object.assign([], this.amountDefault);

    result.forEach(element => {
      const date = new Date(Date.parse(element.dateApply));
      if ( element.idMoneda === '01' ) {
        defaultSoles[date.getDate() - 1] = element.amount;
      }
      else if ( element.idMoneda === '02' ) {
        defaultDolares[date.getDate() - 1] = element.amount;
      }
    });

    let sumaSoles = 0;
    let sumaDolares = 0;
    defaultSoles.forEach(x => sumaSoles += x);
    defaultDolares.forEach(x => sumaDolares += x);

    if (index === 0){
      this.totalMesSoles += sumaSoles;
      this.totalMesDolares += sumaDolares;
    }
    else if (index === 1) {
      this.totalMesSoles -= sumaSoles;
      this.totalMesDolares -= sumaDolares;
    }

    this.chartDataSoles[index] = Object.assign(this.chartDataSoles[index], {
      data: defaultSoles
    });

    this.chartDataDolares[index] = Object.assign(this.chartDataDolares[index], {
      data: defaultDolares
    });
  }
}
