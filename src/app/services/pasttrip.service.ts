import { Injectable } from '@angular/core';
import { Pasttrip } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PasttripService {

  public pasttrips: Array<Pasttrip> = [];

  constructor() {
    let pasttrip1 = new Pasttrip();
    pasttrip1.name = "One";
    pasttrip1.id = 1;
    pasttrip1.price = "$50 per day";
    pasttrip1.imgName = "https://i.boring.host/16AXfItu.jpg";
    pasttrip1.location = "Cape Town, South Africa";
    pasttrip1.startdate = "01/19/2017";
    pasttrip1.enddate = "02/12/2017";

    let pasttrip2 = new Pasttrip();
    pasttrip2.name = "Two";
    pasttrip2.id = 2;
    pasttrip2.price = "$45 per day";
    pasttrip2.imgName = "https://i.boring.host/16AYUMML.jpg";
    pasttrip2.location = "Reykjavik, Iceland";
    pasttrip2.startdate = "03/30/2018";
    pasttrip2.enddate = "04/12/2018";

    let pasttrip3 = new Pasttrip();
    pasttrip3.name = "Three";
    pasttrip3.id = 3;
    pasttrip3.price = "$70 per day";
    pasttrip3.imgName = "https://i.boring.host/16AZPdCE.jpg";
    pasttrip3.location = "Singapore, Singapore";
    pasttrip3.startdate = "04/17/2019";
    pasttrip3.enddate = "05/10/2018";

    this.pasttrips.push(pasttrip1);
    this.pasttrips.push(pasttrip2);
    this.pasttrips.push(pasttrip3);
  }

  getAllPasttrips() {
    this.pasttrips = [];
    let pasttrip1 = new Pasttrip();
    pasttrip1.name = "One";
    pasttrip1.id = 1;
    pasttrip1.price = "$50 per day";
    pasttrip1.imgName = "https://i.boring.host/16AXfItu.jpg";
    pasttrip1.location = "Cape Town, South Africa";
    pasttrip1.address = "5 Orange Street, Bo-Kaap";
    pasttrip1.occupancy = 2;
    pasttrip1.startdate = "01/19/2017";
    pasttrip1.enddate = "02/12/2017";

    let pasttrip2 = new Pasttrip();
    pasttrip2.name = "Two";
    pasttrip2.id = 2;
    pasttrip2.price = "$45 per day";
    pasttrip2.imgName = "https://i.boring.host/16AYUMML.jpg";
    pasttrip2.location = "Reykjavik, Iceland";
    pasttrip2.address = "12 DonnoIceland Street, Reykjavik";
    pasttrip2.occupancy = 5;
    pasttrip2.startdate = "03/30/2018";
    pasttrip2.enddate = "04/12/2018";

    let pasttrip3 = new Pasttrip();
    pasttrip3.name = "Three";
    pasttrip3.id = 3;
    pasttrip3.price = "$70 per day";
    pasttrip3.imgName = "https://i.boring.host/16AZPdCE.jpg";
    pasttrip3.location = "Singapore, Singapore";
    pasttrip3.address = "420 Nanny State Drive, Singapore";
    pasttrip3.occupancy = 4;
    pasttrip3.startdate = "04/17/2019";
    pasttrip3.enddate = "05/10/2018";

    this.pasttrips.push(pasttrip1);
    this.pasttrips.push(pasttrip2);
    this.pasttrips.push(pasttrip3);
  }

  //Returns null if not found
  findPasttripById(id: number): Pasttrip {
    let foundPasttrip: Pasttrip = null;

    this.pasttrips.forEach(
      (pasttrip: Pasttrip) => {
        if (pasttrip.id == id) {
          foundPasttrip = pasttrip;
        }
      }
    );

    return foundPasttrip;
  }
}
