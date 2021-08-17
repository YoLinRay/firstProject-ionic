import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../models/user.model';
import { USERS } from '../service/users.mock';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  User:User[] = USERS;
  vaildUserC:Boolean =true;
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit() {
  }
  signin(){
    this.router.navigate(['/signin']);
  }
  logOut(){
    this.userService.vaildUser == false;
    location.reload();
  }
}
