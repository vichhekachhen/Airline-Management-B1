import { Gender } from "../Gender";
import { Person } from "../Person";

export class Employee extends Person {
    protected salary: number
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string, salary: number) {
        super(firstName, lastName, gender, age, Nationality)
        this.salary = salary

    }
    public getSalary(): number {
        return this.salary
    }

}

