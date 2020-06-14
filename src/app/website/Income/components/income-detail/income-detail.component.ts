import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { IncomesService } from 'src/app/core/services/incomes/incomes.service';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss']
})
export class IncomeDetailComponent implements OnInit {

  form: FormGroup;
  monedas: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<IncomeDetailComponent>,
    private service: IncomesService
  ) {
    this.buildForm();
    this.monedas = Constants.monedas;
   }

  ngOnInit(): void {
  }

  saveIncome(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const income = this.form.value;
      console.log(income, 'income');
      if (confirm('Desea guardar la transacción?')) {
        const result = this.service.createIncome(income);
        console.log(result, 'result post');
        alert('Se registro correctamente');
        this.dialogRef.close();
      }
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      Description: ['', [Validators.required]],
      DateApply: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      IdMoneda: ['', [Validators.required]],
      IdCard: ''
    });
  }

}
