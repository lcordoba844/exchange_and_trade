import { Asset } from './asset.ts';

class ExchangeOrder {
    idExchangeOrder: number;
    buyOrSell: boolean;
    asset: Asset;
    amountTo: number;
    priceTo: number;
    priceDeviation: number;
    userID: number;

    constructor(asset: Asset) {
        this.idExchangeOrder= 0;
        this.buyOrSell = false;
        this.asset= asset;
        this.amountTo= 0;
        this.priceTo= 0;
        this.priceDeviation= 0;
        this.userID= 0;
    }
}