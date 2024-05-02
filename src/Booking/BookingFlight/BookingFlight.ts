import { Seat } from "../../Airplane/Seat";
import { Gate } from "../../Airport/Gate";
import { Flight } from "../../Flight/Flight";
import { Baggage } from "../../Person/Material/Baggage";
import { Passenger } from "../../Person/Passenger/Passenger";
import { Meal } from "../Meal/Meal";


export class BookingFlight {
    private passengers: Passenger[] = [];
    private chooseMeal: Meal[] = [];
    private flight: Flight;
    private gate: Gate;

    public getMealsFromBookingFlight(): Meal[] {
        return this.chooseMeal;
    }

    public getFlightFromBookingFlight() {
        return this.flight;
    }
    public getAFlight(): Flight {
        return this.flight;
    }
    public setAMealFromBookingFlight(meal: Meal) {
        this.chooseMeal.push(meal);
    }
    public setFlight(flight: Flight) {
        this.flight = flight;
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

}