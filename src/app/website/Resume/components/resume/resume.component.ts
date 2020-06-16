import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Constants } from 'src/app/utils/constants';
import { ResumeService } from '../../../../core/services/resume/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  years: any;
  yearFitler: number;
  selectedYear: number;
  dataIncome: any;

  lineChartData: ChartDataSets[] = [
    {
      data: [0],
      label: 'Ingresos'
    },
    {
      data: [0],
      label: 'Egresoss'
    },
  ];

  lineChartLabels: Label[];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'blue',
      backgroundColor: 'Transparent',//'rgba(255,255,0,0.28)',
    },
    {
      borderColor: 'red',
      backgroundColor: 'Transparent',//'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';


  constructor(
    private service: ResumeService
  ) {
    this.years = Constants.years;
    this.selectedYear = (new Date()).getFullYear();
    this.yearFitler = this.selectedYear;
    this.lineChartLabels = Constants.months.map(x => x.name);
    this.lineChartData.length = 1;
    this.getResume();
    console.log(this.lineChartData, 'lineChartData');
  }

  ngOnInit(): void {
  }

  getResume(){
    this.service.getResume(this.yearFitler).subscribe(result => {
      this.dataIncome = result.map(x => x.income);
      console.log(this.dataIncome, 'sum income');
      console.log(result);

      this.lineChartData[0] = Object.assign(this.lineChartData[0], {
        data: result.map(x => x.income),
        label: 'Ingresos'
      });

      this.lineChartData[2] = Object.assign(this.lineChartData[2], {
        data: result.map(x => x.expense),
        label: 'Egresos'
      });

      // this.lineChartColors[0] = Object.assign(this.lineChartColors[0], {
      //   borderColor: 'black',
      //   backgroundColor: 'rgba(255,255,0,0.28)',
      // });

      // this.lineChartColors[1] = Object.assign(this.lineChartColors[1], {
      //   borderColor: 'black',
      //   backgroundColor: 'rgba(255,255,0,0.28)',
      // });
    });
  }

}
