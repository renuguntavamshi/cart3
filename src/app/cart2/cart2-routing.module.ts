import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cart2Page } from './cart2.page';

const routes: Routes = [
  {
    path: '',
    component: Cart2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cart2PageRoutingModule {}
