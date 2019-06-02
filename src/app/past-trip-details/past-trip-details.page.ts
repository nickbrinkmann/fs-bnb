import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pasttrip } from '../models';
import { AlertController, NavController } from '@ionic/angular';
import { PasttripService } from '../services/pasttrip.service';

@Component({
  selector: 'app-past-trip-details',
  templateUrl: './past-trip-details.page.html',
  styleUrls: ['./past-trip-details.page.scss'],
})
export class PastTripDetailsPage implements OnInit {

  private pasttripId: number;
  public nameOfPasttrip: string;
  public currentPasttrip: Pasttrip;
  
  public pasttrips: Array<Pasttrip> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private PasttripService: PasttripService
  ) { }

  ngOnInit() {
    let arrow = async (data: any) => {
      this.nameOfPasttrip = data.params.pasttripName;
      this.pasttripId=data.params.pasttripId;

      this.currentPasttrip = this.PasttripService.findPasttripById(this.pasttripId);

      if (!this.currentPasttrip) {
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
    this.navCtrl.navigateForward('tab5');
  }

}
