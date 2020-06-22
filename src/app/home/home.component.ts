import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responseJson: string;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  demo(){
    this.auth.loginPass();
  }

  login(){
    this.auth.login();
  }

}
