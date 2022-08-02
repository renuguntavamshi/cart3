import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cart1PageRoutingModule } from './cart1-routing.module';

import { Cart1Page } from './cart1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cart1PageRoutingModule
  ],
  declarations: [Cart1Page]
})
export class Cart1PageModule {}
