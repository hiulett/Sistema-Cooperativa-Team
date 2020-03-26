import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovementDetailPageRoutingModule } from './movement-detail-routing.module';

import { MovementDetailPage } from './movement-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovementDetailPageRoutingModule
  ],
  declarations: [MovementDetailPage]
})
export class MovementDetailPageModule {}
