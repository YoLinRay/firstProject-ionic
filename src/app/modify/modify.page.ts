import { Component, OnInit } from '@angular/core';
import { USERS } from '../service/users.mock';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { ActionSheetController, NavController } from '@ionic/angular';
import { ApiImage, ApiService } from '../services/api.service';
import { CameraResultType, CameraSource } from '@capacitor/camera';
import { Plugins } from '@capacitor/core';
const { Camera } = Plugins;
@Component({
  selector: 'app-modify',
  templateUrl: './modify.page.html',
  styleUrls: ['./modify.page.scss'],
})
export class ModifyPage implements OnInit {
  name: string;
  Email: string;
  Users: User[] = USERS;
  images: ApiImage[] = [];
  constructor(private router: Router, private navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController) {

  }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/tabs/tab3'])
  }
  changePwd() {
    this.navCtrl.navigateForward(['/modify/change-pwd'])
  }

  async selectImageSource() {
    const buttons = [
      {
        text: '拍照',
        icon: 'camera',
        handler: () => {
          this.addImage(CameraSource.Camera);
        }
      },
      {
        text: '選擇照片',
        icon: 'image',
        handler: () => {
          this.addImage(CameraSource.Photos);
        }
      }
    ];
    const actionSheet = await this.actionSheetCtrl.create({
      header: '',
      buttons
    });
    await actionSheet.present();

  }

  async addImage(source: CameraSource) {
    const image = await Camera.getPhoto({
      quality: 60,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source
    });
  }
}


