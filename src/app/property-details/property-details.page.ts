import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Property } from '../models';
import { PropertyService } from '../services/property.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  private propertyId: number;
  public nameOfProperty: string;
  public currentProperty: Property;
  // public foundId: boolean = false;

  //Not a long term solution but just makes things work for now
  public properties: Array<Property> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private PropertyService: PropertyService
  ) { }

  ngOnInit() {
    
    // let receivedQueryParams = function(data: any) {
    //   console.log(data);
    //   console.log(data.params.propertyName)

    //   this.nameOfProperty = data.params.propertyName;
    // } **This does not work. Find out why.**

    let arrow = async (data: any) => {
      this.nameOfProperty = data.params.propertyName;
      this.propertyId = data.params.propertyId;

      this.currentProperty = this.PropertyService.findPropertyById(this.propertyId);

      if (!this.currentProperty) {
        const alert = await this.alertCtrl.create({
          header: 'Alert',
          subHeader: 'Warning',
          message: 'This page does not exist',
          buttons: ['OK']
        });

        await alert.present();
        this.navigateBack();

      }

    };

    this.activatedRoute.queryParamMap.subscribe(
      // receivedQueryParams\
      arrow
    );
  }

  navigateBack () {
    this.navCtrl.navigateForward('tabs');
  }

}
