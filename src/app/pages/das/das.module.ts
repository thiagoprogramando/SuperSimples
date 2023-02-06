import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DasPageRoutingModule } from './das-routing.module';

import { DasPage } from './das.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DasPageRoutingModule
  ],
  declarations: [DasPage]
})
export class DasPageModule {}
