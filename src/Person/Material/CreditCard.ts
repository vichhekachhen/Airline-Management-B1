export class CreditCard {
    private cardNumber: string;
    private expirationDate: string;
    private cvv: string;

    constructor(cardNumber: string, expirationDate: string, cvv: string) {
        this.cardNumber = cardNumber;
        this.expirationDate = expirationDate;
        this.cvv = cvv;
    }
    public getCardNumber(): string {
        return this.cardNumber;
    }
    public getExpirationDate(): string {
        return this.expirationDate;
    }
    public getCvv(): string {
        return this.cvv;
    }

}