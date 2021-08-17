import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActDetailPage } from './act-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ActDetailPage
  },
  {
    path: 'shareboard',
    loadChildren: () => import('./shareboard/shareboard.module').then( m => m.ShareboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActDetailPageRoutingModule {}
