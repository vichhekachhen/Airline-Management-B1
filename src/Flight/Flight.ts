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

    public addPilot(pilot:Pilot):void{
        this.pilot = pilot;
    }
    public addRoute(route:Route):void{
        this.route = route;
      }
      public getRoute():Route{
        return this.route;
      }
    public getMeals(): Meal[] {
        return this.meals;
    }
    public getGates(): Gate[] {
        return this.gates;
    }
    public addGate(gate: Gate) {
        this.gates.push(gate);
    }

    public addDate(date: DateTime) {
        this.dateTime = date
    }

    public addMealFromBookingFlight() {
        this.bookingFlight.forEach((findMeal) => {
            findMeal.getMealsFromBookingFlight().forEach((meal) => {
                this.meals.push(meal);
            })
        })
    }
    public addBookingFlight(bookingFlight:BookingFlight) {
        this.bookingFlight.push(bookingFlight);
    }
   
}