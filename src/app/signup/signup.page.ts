import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  pwd:string;
  pwdCheck:string;
  samePwd = true;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/tabs/tab2'])
  }
 checkPwd(userpwd:string,userpwdCheck:string):boolean{
  if(userpwd === userpwdCheck){
    return true
  }
  return false
 }
 signup(){
  if(this.checkPwd(this.pwd,this.pwdCheck)){
    this.router.navigate(['/signin'])
  }else{
    this.samePwd = false
  }
 }
}
