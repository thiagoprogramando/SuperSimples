import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NfePageRoutingModule } from './nfe-routing.module';

import { NfePage } from './nfe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NfePageRoutingModule
  ],
  declarations: [NfePage]
})
export class NfePageModule {}
