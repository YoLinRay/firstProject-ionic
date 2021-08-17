import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TokyoAttractionsPageRoutingModule } from './tokyo-attractions-routing.module';
import { TokyoAttractionsPage } from './tokyo-attractions.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TokyoAttractionsPageRoutingModule,
    PipesModule

  ],
  declarations: [TokyoAttractionsPage]
})
export class TokyoAttractionsPageModule {}
