import { Component, OnInit } from '@angular/core';

import { Pasttrip, User, Property, Payment, Message } from '../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public currentuser: User;

  //Use this going forward
  public user: User = new User();

  constructor(
    //This allows us to do query parameters to pass user info, which will
    //let us search the sql database by id and return user info
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient,
    //The http client only works because we've imported it in the app module!

    private navCtrl: NavController
  ) {
    //Using Local Storage!! The local storage user id key is stored with login at login.page.ts
    const userId1 = localStorage.getItem("user_id");

    if(userId1) {
      this.httpClient
        .get("http://localhost:3000/api/users/" + userId1)
        .subscribe(
          //If you get problems with this code, change response type to any instead of User
          (response: User) => {
            console.log(response);

            //The user variable is defined above as a PUBLIC variable which we can use in this page.
            //We reference user in the html now.
            this.user.id = response.id;
            this.user.firstname = response.firstname;
            this.user.lastname = response.lastname;
            this.user.email = response.email;
          }
        );
    } else {
      //Navigate to login page
      this.navCtrl.navigateForward("login");
    }
   }

  ngOnInit() {
    //The parameters function is called once the query parameters are available for use
    this.activatedRoute.queryParamMap.subscribe(
      //The return type of parameters is ParamMap
      (parameters: ParamMap) => {
        console.log(parameters);
        console.log(parameters.get("user_id"));

        // http://localhost:8100/tabs/tab4?user_id=5
        // ?
        // variable = value
        //if there was a second query param it would look like:
        // http://localhost:8100/tabs/tab4?user_id=5&param_2=lol

        //*********THE BELOW USES QUERY PARAMETERS AND DOES NOT STORE USER ID WHEN PAGE RELOADED. REPLACEMENT CODE ABOVE */
        // let userId = parameters.get("user_id");

        //Express code:
        // app.get("/api/users/:id", () ...etc );
        // The below sends a request to the api to return user's info
        // this.httpClient
        // .get("http://localhost:3000/api/users/" + userId)
        // .subscribe(
        //   //If you get problems with this code, change response type to any instead of User
        //   (response: User) => {
        //     console.log(response);

        //     //The user variable is defined above as a PUBLIC variable which we can use in this page.
        //     //We reference user in the html now.
        //     this.user.id = response.id;
        //     this.user.firstname = response.firstname;
        //     this.user.lastname = response.lastname;
        //     this.user.email = response.email;
        //   }
        // );

        //*********THE ABOVE USES QUERY PARAMETERS AND DOES NOT STORE USER ID WHEN PAGE RELOADED. REPLACEMENT CODE ABOVE */

        //Our express might return:
        //return res.json({
        //id: 123,
        //firstname: "Jon",
        //lastname: "Doe",
        //email: "email"
        //})

      }
    );


  }

}
