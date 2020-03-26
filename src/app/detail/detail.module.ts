import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { DetailPage } from './detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule, AgGridModule.withComponents([]) 
  ],
  declarations: [DetailPage]
})
export class DetailPageModule {}
