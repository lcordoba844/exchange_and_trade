class User {
    username: string;
    password: string;

    constructor(username: string, pass: string) {
        this.username = username;
        this.password = pass;
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