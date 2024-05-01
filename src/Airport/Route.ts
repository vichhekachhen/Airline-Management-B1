import { Airport } from "./Airport";

export class Route {
    private departure: string;
    private arrival: string;
    private airport:Airport;

    constructor (departure: string, arrival: string, airport:Airport) {
        this.departure = departure;
        this.arrival = arrival;
        this.airport = airport;
    }
    
    public getAirport():Airport{
        return this.airport;
    }

    public getDeparture(): string {
        return this.departure;
    }
    
    public getArrival(): string {
        return this.arrival;
    }

}
