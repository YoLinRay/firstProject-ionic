import { Component, OnInit } from '@angular/core';
import { USERS } from '../service/users.mock';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {
  name: string;
  Email: string;
  Users: User[] = USERS;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/tabs/tab3'])
  }

}
/*password:string;
  newPwd:string;
  newPwdCheck:string;*/