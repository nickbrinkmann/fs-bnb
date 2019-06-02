export class Property {
    public id: number;
    public name: string;
    public price: string;
    public imgName: string;
    public location: string;
    public address: string;
    public occupancy: number;
    public listing_owner: string;

    constructor() {
        this.id=0;
        this.name="";
        this.price="";
        this.imgName="";
        this.location="";
        this.address="";
        this.occupancy=undefined;
        this.listing_owner="";
    }
}