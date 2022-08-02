import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart2PageRoutingModule } from './cart2-routing.module';

import { Cart2Page } from './cart2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart2PageRoutingModule
  ],
  declarations: [Cart2Page]
})
export class Cart2PageModule {}
