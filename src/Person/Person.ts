import { Gender } from "./Gender";
export abstract class Person {
    protected firstName: string
    protected lastName: string
    protected gender: Gender
    protected age: number
    protected Nationality: string
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.age = age;
        this.Nationality = Nationality;
    }
}