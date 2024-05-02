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
    private chooseMeal: string | undefined;
    private frequentFlyerNumber?: string;

    private bookingFlights: BookingFlight[] = [];
    constructor(firstName: string, lastName: string, gender: Gender, age: number, Nationality: string) {
        super(firstName, lastName, gender, age, Nationality);
    }

    public addBookingFlight(bookingFlight: BookingFlight) {
        this.bookingFlights.push(bookingFlight);
    }

    public setBooking(book: Booking) {
        this.booking = book;
    }

    public getReferenceNumberInPasserenger(): string {
        return this.booking.getReferenceNumberInBooking();
    }
    public addBaggages(baggage: Baggage) {
        this.Baggages.push(baggage);
    }

    public getBooking(): Booking {
        return this.booking;
    }

    public setChooseMeal(meal: string) {
        this.chooseMeal = meal;
    }

    public getChooseMeal(): string | undefined {
        return this.chooseMeal;
    }

    public setFrequentFlyerNumber(frequentFlyerNumber: string) {
        this.frequentFlyerNumber = frequentFlyerNumber;
    }

    public getFrequentFlyerNumber(): string | undefined {
        return this.frequentFlyerNumber;
    }

    public getGateForPassenger(): Gate | undefined {
        let showgate: Gate | undefined = undefined
        this.bookingFlights.forEach(flight => {
            flight.getFlight().getGates().forEach(gate => {
                if (flight.getGate() === gate) {
                    showgate = gate;
                }
            })
        })
        return showgate;
    }
}
