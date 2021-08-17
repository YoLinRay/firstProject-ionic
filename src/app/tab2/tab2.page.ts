import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProtractorExpectedConditions } from 'protractor';
import { PopoverComponent } from '../components/popover/popover.component';
import { NavController } from "@ionic/angular";
import { Banner } from '../models/banner';
import { bannerM } from '../service/banner.mock';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  slideOptions = {
    initialSlide: 1,
    speed: 400,
  };
  banner: Banner[] = bannerM
  constructor(private popCtrl: PopoverController, private navCtrl: NavController) { }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
  ngOnInit() {
  }

  async openPopover(ev: any) {
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      event: ev
    })
    return await popover.present()

  }
  tokyo() {
    this.navCtrl.navigateForward('tabs/tab2/tokyo-attractions');
  }

}
