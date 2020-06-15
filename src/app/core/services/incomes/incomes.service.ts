import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Income } from '../../models/income.model';
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IncomesService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {

  }

  getIncome(id: string = '', year: number = 0, month: number = 0,
            amount: number = 0, description: string = '') {
    const userId = this.auth.userProfile.sub;
    amount = amount == null ? 0 : amount;
    console.log(amount, 'amount');
    return this.http
    .get<Income[]>(`${environment.url_api}income?idUser=${userId}&id=${id}&month=${month}&year=${year}&amount=${amount}&description=${description}`);
    // .subscribe(
    //   data => console.log('success', data),
    //   error => console.log('error', error)
    // );
  }

  createIncome(income: Income){
    income.IdUser = this.auth.userProfile.sub;
    console.log(income, 'income');
    return this.http.post(`${environment.url_api}income`, income)
    .subscribe(
      data => console.log('successpost', data),
      error => console.log('errorpost', error)
    );
  }

  deleteIncome(idIncome: string){
    return this.http.delete(`${environment.url_api}income?id=${idIncome}`);
  }

  handleError(error: HttpErrorResponse){
    console.log(error);
  }
}