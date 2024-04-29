import { Flight } from "../Flight/Flight";

export class Gate{
    private gateNumber:string
    private flights: Flight[]=[];
    constructor(gateNumber:string){
        this.gateNumber = gateNumber
    };
    public addFlight(flight:Flight){
        this.flights.push(flight);
    };
    public getFlight():Flight[]{
        return this.flights
    };
    public getGateNumber():string{
        return this.gateNumber;
    }

}