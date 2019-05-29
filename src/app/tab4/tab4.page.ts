import { Component, OnInit } from '@angular/core';

import { Pasttrip, User, Property, Payment, Message } from '../models';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public currentuser: User;

  constructor() {
    this.currentuser = new User();
    this.currentuser.firstname="Nick";
    this.currentuser.lastname="Brinkmann";
    this.currentuser.email="nick.brinkmann4@gmail.com";
    this.currentuser.phone_number="+27820426996";
    this.currentuser.where_lives="Johannesburg, South Africa";
    this.currentuser.join_date="May, 2019";
    this.currentuser.avatar_src="https://i.boring.host/15G7acWX.png";
    this.currentuser.trips_booked=12;
    this.currentuser.reviews_given=6;
    this.currentuser.on_trip=false;
  }

  ngOnInit() {
  }

}
