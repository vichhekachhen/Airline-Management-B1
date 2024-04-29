import { Gate } from "../../Airport/Gate";
import { Flight } from "../../Flight/Flight";
import { Passenger } from "../../Person/Passenger/Passenger";
import { Meal } from "../Meal/Meal";

export class BookingFlight {
    private passengers: Passenger[] = [];
    // private bookingTrip: BookingTrip;
    private chooseMeal: Meal[] = [];
    private flight: Flight;
    private gate: Gate;

    getMealsFromBookingFlight(): Meal[] {
        return this.chooseMeal;
    }

    getFlightFromBookingFlight() {
        return this.flight;
    }
    getAFlight(): Flight {
        return this.flight;
    }
    setAMealFromBookingFlight(meal: Meal) {
        this.chooseMeal.push(meal);
    }
    setFlight(flight: Flight) {
        this.flight = flight;
    }
    setAGateInBookingFlight(gate: Gate) {
        this.gate = gate
    }
    getGate() {
        return this.gate;
    }
    addPassengers(passenger: Passenger) {
        this.passengers.push(passenger)
    }

}