import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CardsService } from 'src/app/core/services/cards/cards.service';
import { Constants } from '../../../../utils/constants';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {

  form: FormGroup;
  monedas: any;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardDetailComponent>,
    private service: CardsService
  ) {
    this.buildForm();
    this.monedas = Constants.monedas;
  }

  ngOnInit(): void {
  }

  saveCard(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const card = this.form.value;
      if (confirm('Desea guardar la transacción?')) {
        const result = this.service.createCard(card);
        alert('Se registro correctamente');
        this.dialogRef.close();
      }
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      Description: ['', [Validators.required]],
      CardNumber: ['', [Validators.required]],
      IdMoneda: ['', [Validators.required]]
    });
  }

}
