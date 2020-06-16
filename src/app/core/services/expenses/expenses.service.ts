import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Expense } from '../../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getExpense(id: string = '', year: number = 0, month: number = 0,
             amount: number = 0, description: string = '') {
    const userId = this.auth.userProfile.sub;
    amount = amount == null ? 0 : amount;
    console.log(amount, 'amount');
    return this.http
    .get<Expense[]>(`${environment.url_api}expense?idUser=${userId}&id=${id}&month=${month}&year=${year}&amount=${amount}&description=${description}`);
    // .subscribe(
    //   data => console.log('success', data),
    //   error => console.log('error', error)
    // );
  }

  createExpense(expense: Expense){
    expense.IdUser = this.auth.userProfile.sub;
    return this.http.post(`${environment.url_api}expense`, expense)
    .subscribe(
      data => console.log('successpost', data),
      error => console.log('errorpost', error)
    );
  }

  deleteExpense(idIncome: string){
    return this.http.delete(`${environment.url_api}expense?id=${idIncome}`);
  }
}
