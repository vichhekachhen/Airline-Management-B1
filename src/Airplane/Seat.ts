export class Seat {
    constructor(private seatNumber: string) {
        this.seatNumber = seatNumber;
    }
    public getSeatNumber(): string {
        return this.seatNumber;
    }
}