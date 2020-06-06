import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responseJson: string;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
  }

  pingApi() {
    this.api.ping$().subscribe(
      res => this.responseJson = res
    );
  }

}
