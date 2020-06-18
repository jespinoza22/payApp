import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeComponent } from './components/resume/resume.component';
import { MaterialModule } from '@material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { ResumeDetailComponent } from './components/resume-detail/resume-detail.component';


@NgModule({
  declarations: [
    ResumeComponent,
    ResumeDetailComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ChartsModule
  ],
  providers: [DecimalPipe],
})
export class ResumeModule { }
