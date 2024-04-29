import { Gender } from "../Gender";
import { Employee } from "./Employee";
import { Flight } from "../../Flight/Flight";

export class Chef extends Employee {
    private fights: Flight[] = [];
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string, salary: number) {
        super(firstName, lastName, gender, age, Nationality, salary)
   
    }

    addFlight(fight: Flight) {
        this.fights.push(fight);
    }

}