export class Wallet {
    idWallet: number;
    assets: { name: string; amount: number }[];

    constructor(idWallet:number) {
        this.idWallet = idWallet;
        this.assets = [];
    }

    // Add a new asset or update an existing asset's amount
    addAsset(name: string, amount: number): void {
        const existingAsset = this.assets.find(asset => asset.name === name);
        if (existingAsset) {
            existingAsset.amount += amount; // Update amount if asset already exists
        } else {
            this.assets.push({ name, amount }); // Add new asset if not found
        }
    }

    getAssetAmount(name: string): number {
        const asset = this.assets.find(asset => asset.name === name);
        return asset ? asset.amount : 0;
    }






}