import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DasPage } from './das.page';

const routes: Routes = [
  {
    path: '',
    component: DasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasPageRoutingModule {}
