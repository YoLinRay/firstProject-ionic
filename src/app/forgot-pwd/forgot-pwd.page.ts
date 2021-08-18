import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.page.html',
  styleUrls: ['./forgot-pwd.page.scss'],
})
export class ForgotPwdPage implements OnInit {

  constructor(private authService: AuthService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async resetPassword(form): Promise<void> {  //(忘記密碼 發送郵件)比對firebase中是否有此Email帳號
  this.authService.resetPassword(form.value.email).then(async ()=>{
    const alert = await this.alertCtrl.create({ //有此帳號時的警告視窗
      message:'已寄送郵件至Email信箱',
      buttons:[{text:'OK',role:'cancel'}]
    });
    await alert.present();
    this.router.navigateByUrl('signin');},
  async error =>{
    const errorAlert = await this.alertCtrl.create({ //無此帳號時的警告視窗
      message:'Email輸入錯誤',
      buttons:[{text:'OK',role:'cancel'}],
    });
    await errorAlert.present();
  }
  )
  }
  back() {
    this.router.navigate(['/signin'])
  }
}
