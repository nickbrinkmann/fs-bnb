import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pasttrip, User, Property, Payment, Message } from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private navCtrl: NavController
  ) {}

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }
}
