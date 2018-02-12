import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CustomerDetailComponent} from '../customer-detail/customer-detail.component';
import {CustomerListComponent} from '../customer-list/customer-list.component';
import {StartPageComponent} from '../start-page/start-page.component';
import {Page404Component} from '../page404/page404.component';
import {ImprintComponent} from '../imprint/imprint.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          redirectTo: '/start',
          pathMatch: 'full'
        },
        {
          path: 'start',
          component: StartPageComponent
        },
        {
          path: 'impressum',
          component: ImprintComponent
        },
        {
          path: 'customers',
          component: CustomerListComponent
        },
        {
          path: 'customers/:id',
          component: CustomerDetailComponent
        },
        {
          path: '**',
          component: Page404Component
        }
      ]
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
