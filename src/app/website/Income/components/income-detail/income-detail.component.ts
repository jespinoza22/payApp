import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styleUrls: ['./income-detail.component.scss']
})
export class IncomeDetailComponent implements OnInit {

  isChecked: false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<IncomeDetailComponent>
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const income = this.form.value;
      console.log(income, 'income');
      if (confirm('Desea cerrar la ventana?')) {  this.dialogRef.close(); }
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      description: ['', [Validators.required]],
      dateApply: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      card: ''
    });
  }

}
