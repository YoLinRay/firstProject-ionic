import { Component } from '@angular/core';
import * as firebase from 'firebase/app'
import { firebaseConfig } from './firebase.config';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }
initializeApp(){
  firebase.default.initializeApp(firebaseConfig);
} 
}
