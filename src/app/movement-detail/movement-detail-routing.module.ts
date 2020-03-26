import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovementDetailPage } from './movement-detail.page';

const routes: Routes = [
  {
    path: '',
    component: MovementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovementDetailPageRoutingModule {}
