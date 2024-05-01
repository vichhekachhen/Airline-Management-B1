import { Baggage } from "../Person/Material/Baggage"
import { Seat } from "./Seat"

export class Airplane {
    private seats:Seat[] = [];
    private baggages:Baggage[] = [];
    constructor(private airplane: string) {
        this.airplane = airplane;
    }

    public addSeat(...seat:Seat[]):void {
        this.seats.push(...seat);
    }

    public addBaggage(...baggage:Baggage[]):void {
        this.baggages.push(...baggage);
    }
}