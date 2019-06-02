import { Injectable } from '@angular/core';
import { Property } from '../models';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {

  public properties: Array<Property> = [];

  constructor() {
    let property1 = new Property();
    property1.id=1;
    property1.name="One";
    property1.price="$50 per day";
    property1.imgName="https://i.boring.host/16AXfItu.jpg";
    property1.location="Zagreb, Croatia";
    property1.address="10 Fake Road, Zagreb";
    property1.occupancy=5;

    let property2 = new Property();
    property2.id=2;
    property2.name="Two";
    property2.price="$100 per day";
    property2.imgName="https://i.boring.host/16AYUMML.jpg";
    property2.location="Buenos Aires, Argentina";
    property2.address="53 Does Not Exist Drive, Buenos Aires";
    property2.occupancy=3;

    let property3 = new Property();
    property3.id=3;
    property3.name="Three";
    property3.price="$30 per day";
    property3.imgName="https://i.boring.host/16AZPdCE.jpg";
    property3.location="Toronto, Canada";
    property3.address="22 Isnotreal Boulevard, Toronto";
    property3.occupancy=10;

    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
  }

  getAllProperties() {
    this.properties = [];

    let property1 = new Property();
    property1.id=1;
    property1.name="One";
    property1.price="$50 per day";
    property1.imgName="https://i.boring.host/16AXfItu.jpg";
    property1.location="Zagreb, Croatia";
    property1.address="10 Fake Road, Zagreb";
    property1.occupancy=5;

    let property2 = new Property();
    property2.id=2;
    property2.name="Two";
    property2.price="$100 per day";
    property2.imgName="https://i.boring.host/16AYUMML.jpg";
    property2.location="Buenos Aires, Argentina";
    property2.address="53 Does Not Exist Drive, Buenos Aires";
    property2.occupancy=3;

    let property3 = new Property();
    property3.id=3;
    property3.name="Three";
    property3.price="$30 per day";
    property3.imgName="https://i.boring.host/16AZPdCE.jpg";
    property3.location="Toronto, Canada";
    property3.address="22 Isnotreal Boulevard, Toronto";
    property3.occupancy=10;

    this.properties.push(property1);
    this.properties.push(property2);
    this.properties.push(property3);
  }

  //Returns null if not found
  findPropertyById(id: number): Property { 
    let foundProperty: Property = null;

    this.properties.forEach(
      (property: Property) => {
        if (property.id == id) {
          foundProperty=property;
        }
      }
    );

    return foundProperty;
  }
}
