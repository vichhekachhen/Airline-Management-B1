import { Seat } from "../../Airplane/Seat";
import { Gate } from "../../Airport/Gate";
import { Flight } from "../../Flight/Flight";
import { Baggage } from "../../Person/Material/Baggage";
import { Passenger } from "../../Person/Passenger/Passenger";
import { Meal } from "../Meal/Meal";


export class BookingFlight {
    private passengers: Passenger[] = [];
    private baggages: Baggage[] = [];
    private chooseMeal: Meal[] = [];
    private flight: Flight;
    private gate: Gate;

    public getMealsFromBookingFlight(): Meal[] {
        return this.chooseMeal;
    }

    public getFlightFromBookingFlight() {
        return this.flight;
    }

    public getFlight(): Flight {
        return this.flight;
    }

    public setFlight(flight: Flight) {
        this.flight = flight;
    }

    public setMealFromBookingFlight(meal: Meal) {
        this.chooseMeal.push(meal);
    }

    public setAGateInBookingFlight(gate: Gate) {
        this.gate = gate
    }

    public getGate() {
        return this.gate;
    }

    public addPassengers(passenger: Passenger) {
        this.passengers.push(passenger)
    }

    public addBaggages (baggage: Baggage){
        this.baggages.push(baggage)
    }

}