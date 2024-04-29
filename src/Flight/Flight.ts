import { Gate } from "../Airport/Gate";
import { Route } from "../Airport/Route";
import { BookingFlight } from "../Booking/BookingFlight/BookingFlight";
import { Meal } from "../Booking/Meal/Meal";
import { DateTime } from "../Date/DateTime";
import { Chef } from "../Person/Employee/Chef";
import { Pilot } from "../Person/Employee/Pilot";

export class Flight {
    private bookingFlight: BookingFlight[] = [];
    private meals: Meal[] = [];
    private gates: Gate[] = [];
    private route: Route;
    private dateTime: DateTime;
    private pilot: Pilot;
    private chef: Chef;
    constructor(private flightNumber: string) {
        this.flightNumber = flightNumber;
    }

    getMeals(): Meal[] {
        return this.meals;
    }
    getGates(): Gate[] {
        return this.gates;
    }

    addGate(gate: Gate) {
        this.gates.push(gate);
    }

    addDate(date: DateTime) {
        this.dateTime = date
    }
   
}