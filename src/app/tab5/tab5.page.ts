import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pasttrip, User, Property, Payment } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PasttripService } from '../services/pasttrip.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {

  public pasttrips: Array<Pasttrip> = [];

  constructor(
    private navCtrl: NavController,
    private activatedROute: ActivatedRoute,
    private pasttripService: PasttripService
  ) {
    this.pasttripService.getAllPasttrips();
    this.pasttrips = this.pasttripService.pasttrips;
  }

  ngOnInit() {
  }

  navToExplore() {
    this.navCtrl.navigateForward('tabs');
  }

  navToRental() {
    this.navCtrl.navigateForward('rental');
  }

  navToPasttrip(pasttrip: Pasttrip) {
    this.navCtrl.navigateForward("past-trip-details", {
      queryParams: {
        q: "ionic",
        pasttripName: pasttrip.name,
        pasttripId: pasttrip.id
      }
    });
  }
}
