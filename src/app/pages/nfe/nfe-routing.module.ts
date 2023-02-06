import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NfePage } from './nfe.page';

const routes: Routes = [
  {
    path: '',
    component: NfePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NfePageRoutingModule {}
