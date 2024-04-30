import { Seat } from "./Seat";

export class Plane {
    private seats:Seat[] = [];
    constructor(private airplane: string) {
        this.airplane = airplane;
    }

    public addSeat(...seat:Seat[]):void{
        this.seats.push(...seat);
    }
}