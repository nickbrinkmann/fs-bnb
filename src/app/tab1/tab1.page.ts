import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

import { User, Property, Pasttrip, Payment, Message } from '../models';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../services/property.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public properties: Array<Property> = [];

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService
  ) {
    this.propertyService.getAllProperties();
    this.properties = this.propertyService.properties;
    // this.properties = this.propertyService.getAllProperties();
    // This doesn't work for some reason
  }

  navToProfile() {
    this.navCtrl.navigateForward("tab4");
  }

  navToProperty(property: Property) {
    this.navCtrl.navigateForward("property-details", {
      queryParams: {
        q: "ionic",
        propertyName: property.name,
        propertyId: property.id
      }
    });
  }

}
