import { Component, OnInit } from '@angular/core';
import { Property } from '../models';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  //Variables for loading the property
  public propertyId: number;
  public currentProperty = new Property();

  //Variables for making a booking
  public datefrom: string;
  public dateto: string;
  public userid: number;
  public useridstr: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private httpClient: HttpClient
  ) {
    this.useridstr = localStorage.getItem("user_id");
    this.userid = parseInt(this.useridstr);
  }

  ngOnInit() {

    let arrow = async (data: any) => {
      this.propertyId = data.params.propertyId;
      console.log(this.propertyId);

      //Sends an HTTP request to find property by id
      this.httpClient
        .get("http://localhost:3000/api/properties/" + this.propertyId)
        .subscribe(
          async (response: any) => {
            console.log(response);
            console.log(response.id);
            //If successfully found property, stores info in current property variable
            this.currentProperty.id = response.id;
            this.currentProperty.name = response.name;
            this.currentProperty.location = response.location;
            this.currentProperty.imgname = response.imgname;
            this.currentProperty.price = response.price;
            this.currentProperty.ownerid = response.ownerid;
            console.log(this.currentProperty);
          },
          err => {
            console.log("Error");
            alert("Failed to find property");
            this.navigateBack();
          }
        );

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
      //When QueryParams are received, this sends the http request to the api.
      arrow
    );
  }

  navigateBack() {
    this.navCtrl.navigateForward('tabs');
  }

  //Creates a booking request
  submit() {
    console.log("Submitting to the server...");
    
    var booking = {
      datefrom: this.datefrom,
      dateto: this.dateto,
      userid: this.userid
    }

    this.httpClient
      .post("http://localhost:3000/api/properties/" + this.propertyId + "/bookings", booking)
      //Response is for success, err is for errors.
      .subscribe(
        (response: any) => {
          console.log(response);

          //Gives a successful booking alert
          this.presentSuccess("Please await a response from the property owner notifying you if your request has been accepted.");

          //Navigates back to tabs on successful booking request
          this.navCtrl.navigateForward('tabs');
        },
        (err) => {
          console.log(err);
          this.presentAlert(err.error.message);
        }
      );
  }

  async presentAlert(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: error,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK Clicked');
          }
        }
      ]
    });
    return await alert.present();
  }

  async presentSuccess(message) {
    const success = await this.alertCtrl.create({
      header: "Success!",
      subHeader: 'Your booking request has been created',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK Clicked');
          }
        }
      ]
    });
    return await success.present();
  }

}