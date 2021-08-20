import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyPage } from './modify.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyPage
  },
  {
    path: 'change-pwd',
    loadChildren: () => import('./change-pwd/change-pwd.module').then( m => m.ChangePwdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyPageRoutingModule {}
