import { Asset } from "./asset.ts";

class Alert {
    idAlert: number;
    asset: Asset;
    priceTo: number;
    priceDeviation: number;
    userID: number;


    constructor(asset: Asset) {
        this.idAlert = 0;
        this.asset= asset;
        this.priceTo= 0;
        this.priceDeviation=0;
        this.userID= 0;
    }
}