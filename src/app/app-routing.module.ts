import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: 'site',
    component: LayoutComponent,
    // canActivate: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   redirectTo: 'home',
      //   pathMatch: 'full',
      //  },
      {
        path: 'income',
        canActivate: [AuthGuard],
        loadChildren: () => import('./website/Income/income.module').then(m => m.IncomeModule),
        data: { preload: true }
      },
      {
        path: 'card',
        canActivate: [AuthGuard],
        loadChildren: () => import('./website/Card/card.module').then(m => m.CardModule),
        data: { preload: true }
      },
      {
        path: 'expense',
        canActivate: [AuthGuard],
        loadChildren: () => import('./website/Expense/expense.module').then(m => m.ExpenseModule),
        data: { preload: true }
      },
      {
        path: 'resume',
        canActivate: [AuthGuard],
        loadChildren: () => import('./website/Resume/resume.module').then(m => m.ResumeModule),
        data: { preload: true }
      }
    ]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class AppRoutingModule { }
