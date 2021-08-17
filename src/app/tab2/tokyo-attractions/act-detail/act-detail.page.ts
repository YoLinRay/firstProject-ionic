import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { attractions } from 'src/app/models/Attractions';
import { AttractionService } from 'src/app/service/attraction.service';
import { favoriteService } from 'src/app/service/favorite.service';
import { UserService } from 'src/app/service/user.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { NavController } from "@ionic/angular";
@Component({
  selector: 'app-act-detail',
  templateUrl: './act-detail.page.html',
  styleUrls: ['./act-detail.page.scss'],
})
export class ActDetailPage implements OnInit {
  rating = 0;
  starCount = 5;
  ratingArr: boolean[] = [];
  attractionOne?: attractions;
  favorite = [];
  validUser: boolean;
  constructor(private route: ActivatedRoute, private attractionService: AttractionService, private favoriteService: favoriteService, private userService: UserService, private router: Router, private popCtrl: PopoverController,private navCtrl: NavController) { this.ratingArr = Array(this.starCount).fill(false) }

  ngOnInit() {
    const attractionId = Number(this.route.snapshot.params.id);
    this.attractionOne = this.attractionService.getAttraction(attractionId);
    this.favorite = this.favoriteService.getFavorite();
  }
  showBoard(selectedAttration: attractions) {
    this.navCtrl.navigateForward(`tabs/tab2/tokyo-attractions/act-detail/${selectedAttration.id}/shareboard`);
  }
  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'star-outline'
    }
  }
  onClick(i: number) {
    this.rating = i + 1;

  }

  async openPopover(ev: any) {
    if (this.userService.vaildUser == false) {
      const popover = await this.popCtrl.create({
        component: PopoverComponent,
        event: ev
      })
      return await popover.present()
    }
  }

  addToFavorite(attractionOne) {
    if (this.userService.vaildUser == true) {
      this.attractionOne.save = !this.attractionOne.save
      if (this.attractionOne.save == true) {
        this.favoriteService.addFavorite(attractionOne);
      }
      if (this.attractionOne.save == false) {
        this.favoriteService.deleteFavorite(attractionOne);
      }
    } else if (this.userService.vaildUser == false) {
      this.attractionOne.save = false
    }
  }

}
