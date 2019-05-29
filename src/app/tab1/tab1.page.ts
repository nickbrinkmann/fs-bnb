import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pasttrip, User, Property, Payment, Message } from '../models';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public Listings: Array<Property> = [];

  constructor(
    private navCtrl: NavController
  ) {
    let listing1 = new Property();
    listing1.price="$50 per day";
    listing1.imgName="https://i.boring.host/16AXfItu.jpg";
    listing1.location="Zagreb, Croatia";

    let listing2 = new Property();
    listing2.price="$100 per day";
    listing2.imgName="https://i.boring.host/16AYUMML.jpg";
    listing2.location="Buenos Aires, Argentina";

    let listing3 = new Property();
    listing3.price="$30 per day";
    listing3.imgName="https://i.boring.host/16AZPdCE.jpg";
    listing3.location="Toronto, Canada";

    this.Listings.push(listing1);
    this.Listings.push(listing2);
    this.Listings.push(listing3);
  }

  navToProfile(){
    this.navCtrl.navigateForward("tab4");
  }

}
