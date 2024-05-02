import { Gender } from "../Gender";
import { Employee } from "./Employee";
import { Flight } from "../../Flight/Flight";
import { Meal } from "../../Booking/Meal/Meal";

export class Attendant extends Employee {
    private fights: Flight[] = [];
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string, salary: number) {
        super(firstName, lastName, gender, age, Nationality, salary)
   
    }

    public addFlight(fight: Flight) {
        this.fights.push(fight);
    }

    public getMeals() {
        let allMeals:Meal[] = [];
        this.fights.forEach((meals) => {
            meals.getMeals().forEach((meal) => {
                allMeals.push(meal);
            });
        })
        return allMeals;
    }

}