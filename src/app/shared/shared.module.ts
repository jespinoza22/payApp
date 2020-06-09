import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../material/material.module';
import { NavLateralComponent } from './components/nav-lateral/nav-lateral.component';

@NgModule({
    declarations: [
        NavBarComponent,
        NavLateralComponent
    ],
    exports: [
        NavBarComponent,
        NavLateralComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      MaterialModule
    ]
  })
  export class SharedModule { }