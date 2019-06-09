export class Property {
    public id: number;
    public name: string;
    public price: string;
    public imgname: string;
    public location: string;
    public address: string;
    public occupancy: number;
    public ownerid: string;

    constructor() {
        this.id=0;
        this.name="";
        this.price="";
        this.imgname="";
        this.location="";
        this.address="";
        this.occupancy=undefined;
        this.ownerid="";
    }
}