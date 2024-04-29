import { Date } from "../Date/Date";
import { Gender } from "./Gender";
export abstract class Person {
    protected firstName: string
    protected lastName: string
    protected gender: Gender
    protected dateOfBirth: Date
    protected Nationality: string
    constructor(firstName: string, lastName: string, gender: Gender, dateOfBirth: Date, Nationality: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.gender = gender
        this.dateOfBirth = dateOfBirth
        this.Nationality = Nationality
    }
}