import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { attractions } from '../models/Attractions';
import { AttractionService } from '../service/attraction.service';
import { favoriteService } from '../service/favorite.service';
import { ActivatedRoute } from "@angular/router";
import { NavController } from '@ionic/angular';
import { ElementSchemaRegistry } from '@angular/compiler';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  attractionOne?: attractions;
  favorite = [];
  constructor(private popCtrl: PopoverController, private favoriteService: favoriteService, private attractionService: AttractionService, private route: ActivatedRoute, private navCtrl: NavController) { }
  ngOnInit() {
    const attractionId = Number(this.route.snapshot.params.id);
    this.attractionOne = this.attractionService.getAttraction(attractionId);
    this.favorite = this.favoriteService.getFavorite();
  }
  
  async openPopover(ev: any) {
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev
    })
    return await popover.present()
  }
  showDetail(selectedAttration: attractions) {
    this.navCtrl.navigateForward('tabs/tab2/tokyo-attractions/act-detail/' + selectedAttration.id);
  }
}
