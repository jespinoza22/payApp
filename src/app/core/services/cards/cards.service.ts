import { Injectable } from '@angular/core';
import { Card } from '../../models/card.model';
import { environment } from './../../../../environments/environment';
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) { }

  getCard(id: string = '', description: string = ''){
    const userId = this.auth.userProfile.sub;
    return this.http
    .get<Card[]>(`${environment.url_api}card?idUser=${userId}&id=${id}&description=${description}`);
  }

  createCard(card: Card){
    card.IdUser = this.auth.userProfile.sub;
    return this.http.post(`${environment.url_api}card`, card)
    .subscribe(
      data => console.log('successpost', data),
      error => console.log('errorpost', error)
    );
  }

  deleteCard(idCard: string){
    return this.http.delete(`${environment.url_api}card?id=${idCard}`);
  }
}
