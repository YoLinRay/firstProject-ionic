import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShareboardPage } from './shareboard.page';

const routes: Routes = [
  {
    path: '',
    component: ShareboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShareboardPageRoutingModule {}
