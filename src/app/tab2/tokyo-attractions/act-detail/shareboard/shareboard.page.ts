import { Component, OnInit } from '@angular/core';
import { attractions } from 'src/app/models/Attractions';
import { AttractionService } from 'src/app/service/attraction.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { USERS } from 'src/app/service/users.mock';
@Component({
  selector: 'app-shareboard',
  templateUrl: './shareboard.page.html',
  styleUrls: ['./shareboard.page.scss'],
})
export class ShareboardPage implements OnInit {
  attractionOne?: attractions;
  users: User[] = USERS;
  currentUser = "王小明";
  newMsg: string;
  constructor(private attractionService: AttractionService, private route: ActivatedRoute) { }

  ngOnInit() {
    const attractionId = Number(this.route.snapshot.params.id);
    this.attractionOne = this.attractionService.getAttraction(attractionId);
  }
  sendMsg() {
    this.users.push({
      userName: "王小明",
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });
    this.newMsg = ''
  }
}
