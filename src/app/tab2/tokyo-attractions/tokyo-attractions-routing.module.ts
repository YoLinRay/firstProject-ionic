import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokyoAttractionsPage } from './tokyo-attractions.page';

const routes: Routes = [
  {
    path: '',
    component: TokyoAttractionsPage
  },
  {
    path: 'act-detail/:id',
    loadChildren: () => import('./act-detail/act-detail.module').then( m => m.ActDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TokyoAttractionsPageRoutingModule {}
