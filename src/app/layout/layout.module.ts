import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './component/layout.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      SharedModule,
      MaterialModule
    ]
  })
  export class LayoutModule { }