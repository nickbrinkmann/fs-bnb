import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: any = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  };

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  submit() {
    console.log("Submitting to the server...");
    // console.log(this.user);
    this.httpClient
      .post("http://localhost:3000/api/users/register", this.user)
      //Response is for success, err is for errors.
      .subscribe(
        (response: any) => {
          console.log(response);

          //Trying to navigate to new page
          // this.navToProfile();
          this.navCtrl.navigateForward('tabs',
            {
              queryParams: {
                userId: response.id
              }
            });
          //The above tries to pass the user id from page to page, try to get it to work.
        },
        (err) => {
          console.log(err);
          this.presentAlert(err.error.message);
        }
      );
    //You should try to implement an alert if the request fails.
  }

  async presentAlert(error) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      // subHeader: 'yooz dumm',
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

}
