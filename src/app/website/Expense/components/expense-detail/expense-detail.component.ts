import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ExpensesService } from 'src/app/core/services/expenses/expenses.service';
import { CardsService } from '../../../../core/services/cards/cards.service';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.scss']
})
export class ExpenseDetailComponent implements OnInit {

  form: FormGroup;
  monedas: any;
  cards: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ExpenseDetailComponent>,
    private service: ExpensesService,
    private cardService: CardsService
  ) {
    this.buildForm();
    this.monedas = Constants.monedas;
    cardService.getCard().subscribe(result => {
      this.cards = result;
      console.log(this.cards, 'this.cards');
    });
  }

  ngOnInit(): void {
  }

  saveExpense(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const expense = this.form.value;
      console.log(expense, 'income');
      if (confirm('Desea guardar la transacción?')) {
        const result = this.service.createExpense(expense);
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
