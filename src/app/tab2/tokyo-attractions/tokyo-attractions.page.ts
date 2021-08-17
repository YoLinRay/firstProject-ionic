import { Component, OnInit } from '@angular/core';
import { AttractionService } from 'src/app/service/attraction.service';
import { attractions } from 'src/app/models/Attractions';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-tokyo-attractions',
  templateUrl: './tokyo-attractions.page.html',
  styleUrls: ['./tokyo-attractions.page.scss'],
})
export class TokyoAttractionsPage implements OnInit {
  attractions: attractions[] = [];
  textoBuscar = '';
  starAry:string[] = ["star","star","star","star","star"]
  constructor(private AttractionService: AttractionService, private navCtrl: NavController) { }
  ngOnInit() {
    this.attractions = this.AttractionService.getAttractions();
  }
  showDetail(selectedAttration: attractions) {
    this.navCtrl.navigateForward('tabs/tab2/tokyo-attractions/act-detail/' + selectedAttration.id);
  }
  buscar(event) {
    this.textoBuscar = event.detail.value;
  }
 
}
