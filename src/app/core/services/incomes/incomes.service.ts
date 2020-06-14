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

  getAllIncome() {
    const userId = this.auth.userProfile.sub;
    console.log('userId', userId);
    console.log('url', `${environment.url_api}income?idUser=${userId}`);
    return this.http
    .get<Income[]>(`${environment.url_api}income?idUser=${userId}`);
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