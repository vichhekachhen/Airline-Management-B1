import { Person } from "../Person";
import { Gender } from "../Gender";

export class Passenger extends Person {
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string) {
        super(firstName, lastName, gender, age, Nationality)
    }

}