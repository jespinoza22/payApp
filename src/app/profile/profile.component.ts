import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  responseJson: string;

  constructor(
    public auth: AuthService,
    private api: ApiService
  ) {
    console.log(auth);
  }

  ngOnInit() {
  }

  pingApi() {
    this.api.ping$();
  }
}