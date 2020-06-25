import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Constants } from 'src/app/utils/constants';
import { ResumeService } from '../../../../core/services/resume/resume.service';
import { Resume } from 'src/app/core/models/resume.model';
import { DecimalPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ResumeDetailComponent } from '../resume-detail/resume-detail.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  displayedColumns: string[] = ['date', 'incomeSoles', 'incomeDolares', 'expenseSoles',
                                'expenseDolares', 'totalSoles', 'totalDolares'];
  dataSource: Resume[];
  years: any;
  yearFitler: number;
  labelYear: string;
  labelTotalYearSoles: string;
  labelTotalYearDolares: string;
  labelTotalSoles: string;
  labelTotalDolares: string;

  chartOptions = {
    responsive: true
  };

  chartDataSoles = [
    { data: [], label: 'Ingresos - (S/.)' },
    { data: [], label: 'Egresos - (S/.)' }
  ];

  chartDataDolares = [
    { data: [], label: 'Ingresos - ($)' },
    { data: [], label: 'Egresos - ($)' }
  ];

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
    private service: ResumeService,
    private decPipe: DecimalPipe,
    public dialog: MatDialog,
  ) {
    this.years = Constants.years;
    this.yearFitler = (new Date()).getFullYear();
    this.chartLabels = Constants.months.map(x => x.name);
    this.getResume();
    this.service.getResumeTotal().subscribe(result => {
      this.labelTotalSoles = result.totalSoles;
      this.labelTotalDolares = result.totalDolares;
    });
  }

  ngOnInit(): void {
  }

  getResume(){
    this.service.getResume(this.yearFitler).subscribe(result => {

      this.chartDataSoles[0] = Object.assign(this.chartDataSoles[0], {
        data: result.map(x => x.incomeSoles)
      });

      this.chartDataSoles[1] = Object.assign(this.chartDataSoles[1], {
        data: result.map(x => x.expenseSoles)
      });

      this.chartDataDolares[0] = Object.assign(this.chartDataDolares[0], {
        data: result.map(x => x.incomeDolares)
      });

      this.chartDataDolares[1] = Object.assign(this.chartDataDolares[1], {
        data: result.map(x => x.expenseDolares)
      });

      this.dataSource = result;
      let sumTotalSoles = 0;
      let sumTotalDolares = 0;
      result.forEach(x => sumTotalSoles += x.totalSoles);
      result.forEach(x => sumTotalDolares += x.totalDolares);
      this.labelTotalYearSoles = this.decPipe.transform(sumTotalSoles, '1.2-2');
      this.labelTotalYearDolares = this.decPipe.transform(sumTotalDolares, '1.2-2');
    });
  }

  selectMonthDetail(value: any){
    this.dialog.open(ResumeDetailComponent, {
      width: '95%',
      height: '85%',
      maxWidth: '900px',
      data: {
        yearDetail: value.year,
        monthDetail: value.month
      }
    });
  }
}
