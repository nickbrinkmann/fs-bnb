import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pasttrip, User, Property, Payment } from '../models';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public Pasttrips: Array<Pasttrip> = [];

  constructor(
    private navCtrl: NavController
  ) {
    let pasttrip1 = new Pasttrip();
    pasttrip1.price="$50 per day";
    pasttrip1.imgName="https://i.boring.host/16AXfItu.jpg";
    pasttrip1.location="Cape Town, South Africa";
    pasttrip1.startdate="01/19/2017";
    pasttrip1.enddate="02/12/2017";

    let pasttrip2 = new Pasttrip();
    pasttrip2.price="$45 per day";
    pasttrip2.imgName="https://i.boring.host/16AYUMML.jpg";
    pasttrip2.location="Reykjavik, Iceland";
    pasttrip2.startdate="03/30/2018";
    pasttrip2.enddate="04/12/2018";

    let pasttrip3 = new Pasttrip();
    pasttrip3.price="$70 per day";
    pasttrip3.imgName="https://i.boring.host/16AZPdCE.jpg";
    pasttrip3.location="Singapore, Singapore";
    pasttrip3.startdate="04/17/2019";
    pasttrip3.enddate="05/10/2018";

    this.Pasttrips.push(pasttrip1);
    this.Pasttrips.push(pasttrip2);
    this.Pasttrips.push(pasttrip3);
   }

  ngOnInit() {
  }

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToRental() {
    this.navCtrl.navigateForward('rental');
  }
}
