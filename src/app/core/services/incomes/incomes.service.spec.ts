import { TestBed } from '@angular/core/testing';
import { IncomesService } from './incomes.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('IncomesService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: IncomesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
     ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IncomesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
