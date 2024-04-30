import { Person } from "../Person";
import { Gender } from "../Gender";
import { Baggage } from "../Material/Baggage";
import { Booking } from "../../Booking/Booking";
import { Meal } from "../../Booking/Meal/Meal";
import { BookingFlight } from "../../Booking/BookingFlight/BookingFlight";
import { Gate } from "../../Airport/Gate";

export class Passenger extends Person {
    private Baggages: Baggage[] = [];
    private booking: Booking;
    private chooseMeal?: Meal;
    private frequentFlyerNumber?: string;

    private bookingFlights: BookingFlight[] = [];
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string, chooseMeal ?: Meal,frequentFlyerNumber?: string ) {
        super(firstName, lastName, gender, age, Nationality);
        this.chooseMeal = chooseMeal;
        this.frequentFlyerNumber = frequentFlyerNumber;
    }
    
    public addBookingFlight(bookingFlight: BookingFlight) {
        this.bookingFlights.push(bookingFlight);
    }

    public getGateForPassenger(): Gate | undefined {
        let showgate: Gate | undefined = undefined
        this.bookingFlights.forEach(flight => {
            flight.getAFlight().getGates().forEach(gate => {
                if (flight.getGate() === gate) {
                    showgate = gate
                }
            })
        })
        return showgate;
    }
    
    public setBooking(book:Booking){
        this.booking = book;
    }

    public getReferenceNumberInPasserenger(): string {
        return this.booking.getReferenceNumberInBooking()
    }
    public addBaggages(baggage:Baggage){
        this.Baggages.push(baggage)
    }
}
