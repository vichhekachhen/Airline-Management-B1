import { Gender } from "../Gender";
import { DateTime } from "../../Date/DateTime";
import { Employee } from "./Employee";
import { Flight } from "../../Flight/Flight";

export class Pilot extends Employee {
    private Dates: DateTime[] = [];
    private Flights: Flight[] = [];
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string, salary: number) {
        super(firstName, lastName, gender, age, Nationality, salary)

    }

    addFlight(flight: Flight) {
        this.Flights.push(flight)
    }

    addDateFlight(date: DateTime) {
        this.Dates.push(date);
    }

}

