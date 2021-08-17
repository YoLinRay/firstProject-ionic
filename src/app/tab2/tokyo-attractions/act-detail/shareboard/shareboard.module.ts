import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShareboardPageRoutingModule } from './shareboard-routing.module';

import { ShareboardPage } from './shareboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShareboardPageRoutingModule
  ],
  declarations: [ShareboardPage]
})
export class ShareboardPageModule {}
