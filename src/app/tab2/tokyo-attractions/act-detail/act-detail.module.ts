import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActDetailPageRoutingModule } from './act-detail-routing.module';

import { ActDetailPage } from './act-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActDetailPageRoutingModule
  ],
  declarations: [ActDetailPage]
})
export class ActDetailPageModule {}
