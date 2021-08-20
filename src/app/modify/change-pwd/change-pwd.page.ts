import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { USERS } from 'src/app/service/users.mock';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.page.html',
  styleUrls: ['./change-pwd.page.scss'],
})
export class ChangePwdPage implements OnInit {
  Users: User[] = USERS;
  password: string;
  newPwd: string;
  newPwdCheck: string;
  samePwd = true;
  wrongPwd = true;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }
  checkPwd(userpwd: string, userpwdCheck: string): boolean {
    if (userpwd === userpwdCheck && userpwd != "" && userpwdCheck != "") {
      return true
    } else
      return false
  }


  signup() {
    if (this.checkPwd(this.newPwd, this.newPwdCheck) && this.userService.correctPwd(this.password)) {
      this.router.navigate(['/tabs/tab3'])
    } else if (this.userService.correctPwd(this.password) == false) {
      this.wrongPwd = false
      setTimeout(() => {
        this.wrongPwd = true
      }, 3000);
    }
    else {
      this.samePwd = false
      setTimeout(() => {
        this.samePwd = true
      }, 3000);
    }
  }

}
