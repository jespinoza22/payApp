import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Resume } from '../../models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getResume(year: number = 0){
    const userId = this.auth.userProfile.sub;
    return this.http
    .get<Resume[]>(`${environment.url_api}resume?idUser=${userId}&&year=${year}`);
  }
}
