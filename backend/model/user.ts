import { Wallet } from "./wallet.ts"
class User {
    idUser:number;
    username: string;
    password: string;
    wallet: Wallet;

    constructor(idUser:number, username: string, pass: string, wallet: Wallet) {
        this.idUser = idUser;
        this.username = username;
        this.password = pass;
        this.wallet= wallet;
    }

    getUsername(): string{
        return this.username;
    }
    setUsername(username: string): void {
        this.username = username;
    }

    getPassword(): string {
        return this.password
    }
    setPassword(pass: string) {
        this.password = pass;
    }
}