import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { attractions } from 'src/app/models/Attractions';
import { AttractionService } from 'src/app/service/attraction.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { USERS } from 'src/app/service/users.mock';
import { IonContent } from '@ionic/angular';
import { UserService } from 'src/app/service/user.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
@Component({
  selector: 'app-shareboard',
  templateUrl: './shareboard.page.html',
  styleUrls: ['./shareboard.page.scss'],
})
export class ShareboardPage implements OnInit {
  attractionOne?: attractions;
  users: User[] = USERS;
  loginUser: User[] = [{ userName: "user1", createdAt: 1629179193825, msg: "測試", vaildUser: false }, { userName: "user2", createdAt: 1629179193825, msg: "測試", vaildUser: false }];
  newMsg: string;
  @ViewChild(IonContent) content: IonContent;   //獲取IonContent
  constructor(private attractionService: AttractionService, private route: ActivatedRoute, private userService: UserService, private popCtrl: PopoverController) { }

  ngOnInit() {
    const attractionId = Number(this.route.snapshot.params.id);
    this.attractionOne = this.attractionService.getAttraction(attractionId);
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
  sendMsg() {
    for (let i = 0; i <= this.users.length; i++) {
      if (this.users[i].vaildUser == true) {
        this.loginUser.push({
          userName: this.users[i].userName,
          createdAt: new Date().getTime(),
          msg: this.newMsg,
          vaildUser: true
        });
        this.newMsg = "";
        setTimeout(() => {
          this.content.scrollToBottom(200);
        });

      }
    }

  }
}