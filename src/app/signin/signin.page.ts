import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  userEmail: string;
  password: string;
  validUser = true;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  onSignin() {

    if (this.userService.isValidUser(this.userEmail, this.password)) {

      this.router.navigate(['/tabs/tab2']);
    } else {
      this.validUser = false;
    }
  }
  home() {
    this.router.navigate(['/tabs/tab2'])
  }
  signupPage(){
    this.router.navigate(['/signup'])
  }
}
